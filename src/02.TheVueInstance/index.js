/*
01.Creating a Vue Instance

var vm = new Vue({
    // 옵션 - Vue 인스턴스를 생성할 때 options 객체를 전달    
})
*/

/*
02.Data and Methods

// 데이터 객체
var data = { a: 1}

var vm = new Vue({
    // Vue 인스턴스에 데이터 객체를 추가
    // Vue 인스턴스가 생성될 때 data 객체에 있는 모든 속성이 Vue 반응형 시스템에 추가
    // 각 속성값이 변경될 때 Vue가 '반응'하여 새로운 값과 일치하도록 업데이트
    data: data    
})
*/

/*
// 인스턴스에 있는 속성은 원본 데이터에 있는 값을 반환
vm.a === data.a // => true

// 인스턴스에 있는 속성값을 변경하면 원본 데이터에 있는 값도 변경 
vm.a = 2
data.a // => 2

// 원본 데이터에 있는 값을 변경하면 인스턴스에 있는 속성값도 변
data.a = 3
vm.a // => 3

// data에 있는 속성들은 인스턴스가 생성될 때 존재하는 것만 반응하기 때문에, 필요한 속성들은 초기값 지정이 필요
*/

/*
// Object.freeze()를 사용하는 경우, 기존 속성이 변경되는 것을 막아 반응하지 않음
var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})
*/

/*
var data = { a: 1 }

var vm = new Vue({
    el: '#example',
    data: data
})

// $watch는 인스턴스 메소드로 vm.a 값이 변경되면 호출 
vm.$watch('a', function (newVal, oldVal) {
  console.log("watch");
})
*/
