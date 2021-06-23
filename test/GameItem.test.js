const GameItem = artifacts.require('./gameItem.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('GameItem', (accounts) => {
  let contract

  before(async () => {
    contract = await GameItem.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async() => {
      contract = await GameItem.deployed()
      const address = contract.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async() => {
      const name = await contract.name()
      assert.equal(name, 'GameItem')
    })
    it('has a symbol', async() => {
      const symbol = await contract.name()
      assert.equal(symbol, 'GameItem')
    })
  })
})