import { assert as chai } from 'chai'
import { stripHeadings, stripHeadingsCode } from './../src/index'

describe('🧪 strip-headings tests 🧪', () => {
  it('#1 should return true', () => {
    chai.isEmpty(stripHeadings(''))
  })

  it('#2 should return true', () => {
    chai.isEmpty(stripHeadingsCode(''))
  })

  it('#3 should return empty', () => {
    chai.isEmpty(stripHeadings('## Hello'))
  })

  it('#4 should return Hello', () => {
    chai.equal(stripHeadingsCode('## Hello'), 'Hello')
  })
})
