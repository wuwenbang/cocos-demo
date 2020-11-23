const { ccclass, property } = cc._decorator

@ccclass
export default class Helloworld extends cc.Component {
  @property(cc.Label)
  label: cc.Label = null

  @property
  text: string = '你在干什么？'

  start() {
    // init logic
    this.label.string = this.text
  }
}
