import { useNameSpace } from '../hooks/useNameSpace'

const ns = useNameSpace('vue-typewriter-next')

export class PrintTypeWriter {
  private isDelete: boolean = false

  private el: HTMLLabelElement

  private words: string[]

  private showTxt: string = ''

  private printIndex: number = 0

  private appendSpeed: number

  private reduceSpeed: number

  private spped: number

  constructor(element: HTMLLabelElement, words: string[], appendSpeed: number, reduceSpeed: number) {
    this.el = element
    this.words = words
    this.appendSpeed = appendSpeed
    this.reduceSpeed = reduceSpeed
    this.spped = this.appendSpeed

    this.printTick()
  }

  printTick() {
    const { printTick } = this

    // 判断文字是否打完
    if (this.showTxt.length === this.words[this.printIndex].length) {
      this.isDelete = true
      this.spped = this.reduceSpeed
    }

    // 判断文字是否删除完，打下一段文字
    if (this.isDelete && this.showTxt.length === 0) {
      this.isDelete = false
      this.spped = this.appendSpeed
      this.printIndex += 1
      //   console.log('文字删除完，打印下一段文字')
    }

    // 文字都打印过一遍了，从头开始
    if (this.printIndex === this.words.length) {
      this.printIndex = 0
    }

    if (this.isDelete) {
      // 删除文字
      const curWord = this.showTxt
      this.showTxt = curWord.substring(0, curWord.length - 1)
      //   console.log('删除文字->', this.showTxt)
    } else {
      // 添加文字
      const curWord = this.words[this.printIndex]
      this.showTxt = curWord.substring(0, this.showTxt.length + 1)
      //   console.log('添加文字->', this.showTxt)
    }

    this.el.querySelector(`span.${ns.be('typewriter')}`)!.innerHTML = `${this.showTxt}`

    setTimeout(() => printTick.call(this), this.spped)
  }
}
