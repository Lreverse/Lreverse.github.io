$(function() {

    // 点击'home'
    $('.home').on('click', function(){
        $('.about_text').slideUp(1500, function(){
            $('.title').slideDown(1500)
            $('.box').slideUp(1500)
        })
        
    })
    // 点击'about'
    $('.about').on('click', function(){
        $('.me_text').slideUp(1500)
        $('.title').slideUp(1500, function(){
            $('.about_text').slideDown(1500)
        })
    })
    // 点击'me'
    $('.me').on('click', function(){
        $('.title').slideUp(1500)
        $('.me_text').slideDown(1500)
        $('.about_text').slideUp(1500)
    })


    // 标题
    $('.title').hide()
    $('.title').slideToggle(2000)

    $('.me_text').hide()
    
})


