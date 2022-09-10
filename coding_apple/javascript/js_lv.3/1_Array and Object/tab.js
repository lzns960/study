/* 버튼 0 누르면
    - "모든 버튼"에 붙은 orange 클래스명 제거
    - 버튼0에 orange 클래스명 추가
    - "모든 div"에 붙은 show 클래스명 제거
    - div 0에 show 클래스명 추가 
*/
var button = $('.tab-button');
var content = $('.tab-content');

for(let i = 0; i < content.length; i++ ){
    button.eq(i).on('click', function(){
        button.removeClass('orange');
        button.eq(i).addClass('orange');
        content.removeClass('show');
        content.eq(i).addClass('show');
    });
}

/*
$('.list').click(function(e){
    //지금누른게 버튼 0면 탭열기(0)
    if(e.target == document.querySelectorAll('.tab-button')[0]){
        openTab(0)
    }
    //지금누른게 버튼 1면 탭열기(1)
    if(e.target == document.querySelectorAll('.tab-button')[1]){
        openTab(1)
    }
    //지금누른게 버튼 2면 탭열기(2)
    if(e.target == document.querySelectorAll('.tab-button')[2]){
        openTab(2)
    }
})
*/

$('.list').click(function(e){
    //탭열기(지금누른버튼에 숨겨져있는 data-id)
    openTab(e.target.dataset.id);
})

function openTab(num){
        button.removeClass('orange');
        button.eq(num).addClass('orange');
        content.removeClass('show');
        content.eq(num).addClass('show');
};
