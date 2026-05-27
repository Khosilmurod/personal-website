'use client'

import { useEffect, useRef } from 'react'

export function FractalTree() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let p5Instance: { remove: () => void } | undefined

    import('p5').then(({ default: p5 }) => {
      const sketch = (p: any) => {
        class Branch {
          begin: any
          end: any
          age: number
          branch_diameter: number
          branch_maturity_age: number
          is_mature: boolean
          has_child: boolean
          will_split: boolean
          attached_child: number
          treeRef: any

          constructor(begin: any, end: any, treeRef: any) {
            this.begin = begin
            this.end = end
            this.age = 1
            this.branch_diameter = 0.5
            this.branch_maturity_age = p.random(30, 80)
            this.is_mature = false
            this.has_child = false
            this.will_split = false
            this.attached_child = 0
            this.treeRef = treeRef
          }

          update(tree_food: number) {
            this.branch_diameter += 0.002
            if (tree_food > 0) {
              this.age += 1
              if (this.age >= this.branch_maturity_age) this.is_mature = true
              if (!this.is_mature) {
                let branch_length = p5.Vector.sub(this.end, this.begin)
                this.end.add(branch_length.setMag(1.2))
                const progress = this.treeRef
                  ? this.treeRef.branchSplits / this.treeRef.maxBranchSplits
                  : 0
                this.end.y += 0.03 + progress * 0.05
                this.will_split = this.generate_boolean()
              }
            }
          }

          generate_boolean() {
            const progress = this.treeRef
              ? this.treeRef.branchSplits / this.treeRef.maxBranchSplits
              : 0
            const true_trigger = 0.85 - Math.pow(progress, 0.3) * 0.8
            return Math.random() >= true_trigger
          }

          random_orientation() {
            return this.generate_boolean() ? -1 : 1
          }

          count_attached_child(orientation?: number) {
            this.attached_child = orientation ?? 0
          }
        }

        class Tree {
          main_branch: Branch
          branches: Branch[]
          age: number
          alpha: number
          tree_food: number
          isGrowing: boolean
          branchSplits: number
          maxBranchSplits: number

          constructor(begin: any, end: any, alpha = 255) {
            this.main_branch = new Branch(begin, end, this)
            this.main_branch.branch_maturity_age = p.random(40, 100)
            this.branches = [this.main_branch]
            this.age = 1
            this.alpha = alpha
            this.tree_food = 8000
            this.isGrowing = true
            this.branchSplits = 0
            this.maxBranchSplits = 20
          }

          create_new_branch(parent: Branch, orientation: number) {
            let dir = p5.Vector.sub(parent.end, parent.begin)
            dir.rotate(p.random(p.PI / 6 * orientation, p.PI / 8 * orientation))
            dir.setMag(0.1)
            return new Branch(parent.end, p5.Vector.add(parent.end, dir), this)
          }

          grows() {
            if (!this.isGrowing) return
            for (let i = this.branches.length - 1; i >= 0; i--) {
              const b = this.branches[i]
              b.update(this.tree_food)
              if (b.is_mature && !b.has_child && this.branchSplits < this.maxBranchSplits) {
                const orient = b.random_orientation()
                const nb1 = this.create_new_branch(b, orient)
                this.branches.push(nb1)
                b.count_attached_child(orient)
                b.has_child = true
                this.branchSplits++

                if (b.will_split && this.branchSplits < this.maxBranchSplits) {
                  const nb2 = this.create_new_branch(b, b.attached_child * -1)
                  this.branches.push(nb2)
                  nb2.count_attached_child()
                  this.branchSplits++
                }

                if (this.branchSplits >= this.maxBranchSplits) this.isGrowing = false
              }
            }
            if (this.tree_food > 0) {
              this.tree_food -= 4
            } else {
              this.isGrowing = false
            }
          }

          shows() {
            const isDark = document.documentElement.classList.contains('dark')
            for (const b of this.branches) {
              isDark ? p.stroke(230, 230, 230, 200) : p.stroke(40, 40, 40, 200)
              p.strokeWeight(b.branch_diameter)
              p.line(b.begin.x, b.begin.y, b.end.x, b.end.y)
            }
          }
        }

        const forest: Tree[] = []

        p.setup = () => {
          const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
          canvas.style('position', 'fixed')
          canvas.style('top', '0px')
          canvas.style('right', '0px')
          canvas.style('z-index', '-1')
          canvas.style('opacity', '0.3')

          const startX = p.width - 200
          forest.push(new Tree(p.createVector(startX, 0), p.createVector(startX, 1), 255))
        }

        p.draw = () => {
          const isDark = document.documentElement.classList.contains('dark')
          isDark ? p.background(28, 28, 30) : p.background(255)
          for (const tree of forest) {
            tree.grows()
            tree.shows()
          }
          p.frameRate(60)
        }

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight)
        }
      }

      p5Instance = new p5(sketch, containerRef.current!)
    })

    return () => {
      p5Instance?.remove()
    }
  }, [])

  return <div ref={containerRef} />
}
