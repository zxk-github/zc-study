const assert = require('assert');

function add(a, b) {
    return a + b;
}

var expect = add(1, 2);

assert(expect === 3, '预期expect等于3')
assert(true == 1, '预计是4')
// assert('', '""是true')

assert.ok('3', '预期是true')

assert.equal(3, '3', '两个zhi')

assert.notEqual('1', 0, '这两个值不一样')

assert.deepEqual(/a/, new Date(), '这两个对象值想等吗')

const obj1 = {a: 1};
const obj2 = {a: 1};
Object.defineProperty(obj1, 'test', {
    enumerable: false,
    value: 22
})

assert.deepEqual(obj1, obj2, '想等吗')

assert.deepStrictEqual(obj1, obj2, '严格相等吗')

// assert.doesNotThrow(block, [error], [message])

function dnt() {
    throw new TypeError('类型错误');
}

// assert.doesNotThrow(dnt, TypeError, '是类型错误' )

// assert.fail("fail")






