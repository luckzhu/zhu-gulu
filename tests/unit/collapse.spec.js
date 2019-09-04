import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Vue from 'vue'
import Collapse from '@/components/Collapse/collapse'
import CollapseItem from '@/components/Collapse/collapse-item'
chai.use(sinonChai)

describe('Collapse.vue', () => {
  it('存在.', () => {
    expect(Collapse).to.exist
  })

  it('接受 selected 属性', (done) => {
    Vue.component('ez-collapse', Collapse)
    Vue.component('ez-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <ez-collapse :selected="xxx">
          <ez-collapse-item title="标题1" name="1"><span id="content-1">1</span></ez-collapse-item>
          <ez-collapse-item title="标题2" name="2"><span id="content-2">2</span></ez-collapse-item>
          <ez-collapse-item title="标题3" name="3"><span id="content-3">3</span></ez-collapse-item>
        </ez-collapse>
    `
    const vm = new Vue({
      el: div,
      data: {
        xxx: ['1', '2']
      }
    })
    setTimeout(() => {
      expect(vm.$el.querySelector('#content-1')).to.exist
      expect(vm.$el.querySelector('#content-2')).to.exist
      expect(vm.$el.querySelector('#content-3')).to.not.exist
      done()
    })
  })

  it('接受 single 属性', (done) => {

    Vue.component('ez-collapse', Collapse)
    Vue.component('ez-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <ez-collapse :selected.sync="xxx" single>
          <ez-collapse-item title="标题1" name="1"><span id="content-1">1</span></ez-collapse-item>
          <ez-collapse-item title="标题2" name="2"><span id="content-2">2</span></ez-collapse-item>
          <ez-collapse-item title="标题3" name="3"><span id="content-3">3</span></ez-collapse-item>
        </ez-collapse>
    `
    const vm = new Vue({
      el: div,
      data: {
        xxx: ['1']
      }
    })
    setTimeout(() => {
      vm.$el.querySelector('[data-name="2"]').click()
      setTimeout(() => {
        expect(vm.$el.querySelector('#content-1')).to.not.exist
        expect(vm.$el.querySelector('#content-2')).to.exist
        done()
      })
    })
  })

  it('触发 update:selected 事件', (done) => {
    Vue.component('ez-collapse', Collapse)
    Vue.component('ez-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <ez-collapse :selected="xxx" @update:selected="onSelect">
          <ez-collapse-item title="标题1" name="1"><span id="content-1">1</span></ez-collapse-item>
          <ez-collapse-item title="标题2" name="2"><span id="content-2">2</span></ez-collapse-item>
          <ez-collapse-item title="标题3" name="3"><span id="content-3">3</span></ez-collapse-item>
        </ez-collapse>
    `
    const callback = sinon.fake();
    const vm = new Vue({
      el: div,
      data: {
        xxx: ['1']
      },
      methods: {
        onSelect: callback
      }
    })
    setTimeout(() => {
      vm.$el.querySelector('[data-name="2"]').click()
      setTimeout(() => {
        expect(callback).to.have.been.called
        done()
      })
    })
  })

})