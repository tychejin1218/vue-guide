// todo-item 이라는 컴포넌트를 정의
Vue.component('todo-item',{
    // props는 상위 컴포넌트의 데이터를 전달하기 위한 사용자 지정 특성
    props: ['todo'],    
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({

    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]  
    }
})