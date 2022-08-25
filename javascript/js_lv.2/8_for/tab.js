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

