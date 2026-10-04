import test from 'node:test';
import assert from 'node:assert/strict';
import { validateExampleSave } from './resource-example.schema';
test('example save validates independently and trims successful input',() => {
  assert.deepEqual(validateExampleSave({name:'  Ada  '},[]),{ok:true,data:{name:'Ada'}});
  assert.equal(validateExampleSave({name:''},[]).ok,false);
  assert.equal(validateExampleSave({name:'a'.repeat(81)},[]).ok,false);
});
test('example save returns a safe duplicate field error',() => {
  assert.deepEqual(validateExampleSave({name:'NORTH'},['North']),{ok:false,fields:{name:'This name already exists.'}});
});
