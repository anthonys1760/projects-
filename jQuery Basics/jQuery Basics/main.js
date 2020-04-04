    // $('#btn1').on('click',function () {
    //     $('#para1').toggle();
    // });


    // $('#btn2').on('click',function () {
    //     $('#para1').show();
    // });

    // $('#btn1').dblclick(function () {
    //     $('.para1').toggle();
    // });

    // $('#btn1').hover(function () {
    //     $('.para1').toggle();
    // });

    // $('#btn1').on('mousedown',function() {
    //     $('.para1').toggle();
    // });

    // $('#btn1').on('mouseup',function() {
    //     $('.para1').toggle();
    // });

    // $('#btn1').on('click',function (e) {
    //     // alert(e.currentTarget.id);
    //     // alert(e.currentTarget.innerHTML);
    //     // alert(e.currentTarget.className);
    // });

    // $('input').focus(function() {
    //     $(this).css('backgroundColor','pink');
    // });

    // $('input').blur(function() {
    //     $(this).css('backgroundColor','white');
    // });

    // $('input').keyup(function(e) {
    //     console.log(e.target.value);
    // });

    // $('select#gender').change(function(e) {
    //     alert('e.target.value');
    // });

    // $('#form').submit(function(e) {
    //     e.preventDefault();
    //     var name = $('input#name').val();
    //     console.log(name);
    // });

    // $('p.para1').css({color: "red", backgroundColor: '#ccc'});
    // $('#btn1').click(function() {
    //     $('p.para2').toggleClass('myclass');
    // });

    // $('#mydiv').html('<h3>Hello World</h3>');
    // alert($('#mydiv').text());
    // $('ul').append('<li>Append List Item</li>');
    // $('ul').prepend('<li>Prepend List Item</li>');

    // $('.para1').appendTo('.para2');
    // $('.para1').prependTo('.para2');
    // $('ul').before('<h4>Hello</h4>');
    // $('ul').after('<h4>World</h4>');
    // $('ul').empty();
    // $('ul').detach();
    // $('a').attr('target', '_blank');
    // alert($('a').attr('href'));
    // $('a').removeAttr('target');
    // $('p').wrap('<h1>');
    // $('p').wrapAll('<h1>');

    // $('#newItem').keyup(function(e) {
    //     var code = e.which;
    //     if(code == 13) {
    //         e.preventDefault();
    //         $('ul').append('<li>'+e.target.value+'</li>');
    //     }
    // });

    // // var myArr = ['Brad' , 'Kelly', 'Nate', 'Jose'];

    // // $.each(myArr, function(i, val) {
    // //     $('#users').append('<li>'+val+'</li>');
    // // });

    // var newArr = $('ul#list li').toArray();
    // $.each(myArr, function(i, val) {
    //       console.log(val.innerHTML);
    // });

    //Code By Anthony Smith Edited on 4/4/20

    // $('#btnFadeOut').click(function() {
    //     $('#box').fadeOut(3000, function() {
    //         $('#btnFadeOut').text('Its Gone');
    //     });
    // });

    // $('#btnFadeIn').click(function() {
    //     $('#box').fadeIn(3000, function() {
    //     });
    // });

    // $('#btnFadeTog').click(function() {
    //     $('#box').fadeToggle(1000);
    // });

    // $('#btnSlideDown').click(function() {
    //     $('#box').slideDown(3000);
    // });

    // $('#btnSlideUp').click(function() {
    //     $('#box').slideUp(3000);
    // });

    // $('#btnSlideTog').click(function() {
    //     $('#box').slideToggle(3000);
    // });

    // $('btnStop').click(function() {
    //     $('#box').stop();
    // });

    $('#moveRight').click(function() {
        $('#box2').animate({
            left: 500,
            height: '300px',
            width: '300px',
            opacity: '0.5'
        });
    });

    $('#moveLeft').click(function() {
        $('#box2').animate({
            left: 0,
            height: '100px',
            width: '100px',
            opacity: '1'
        });
    });

    $('#moveAround').click(function() {
        var box = $('#box2');
        box.animate({
            left: 300
        });
        box.animate({
            top: 300
        });
        box.animate({
            left: 0,
            top: 300
        });
        box.animate({
            left: 0,
            top: 0
        });
    });
    
