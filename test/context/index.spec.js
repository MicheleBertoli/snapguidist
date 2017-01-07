import { snapguidistContextFactory, snapguidistShape } from '../../src/context/index'

jest.mock(
  '../../src/context/snapguidistContextFactory',
  () => () => ({})
)

jest.mock(
  '../../src/context/snapguidistShape',
  () => ({})
)

test('should expose the expected API', () => {
  expect(snapguidistContextFactory).toBeDefined()
  expect(typeof snapguidistContextFactory).toBe('function')
  expect(snapguidistShape).toBeDefined()
  expect(snapguidistShape).toMatchObject({})
})
