window.addEventListener('load', function() {

    // 获取左右小按钮
    var arrow_right = document.querySelector('.arrow_right')
    var arrow_left = document.querySelector('.arrow_left')
    var focus = document.querySelector('.w')
    var focusWidth = 660 //图片的宽度

    // 获取图片

    var ul = document.querySelector('.w ul')
    var li = document.querySelector('.w li')

    var num = 0

    var first = ul.children[0].cloneNode(true) //克隆第一张图片
    ul.appendChild(first)
        //点击右侧按钮，图片滚动一张start(记得克隆第一张图片)
    arrow_right.addEventListener('click', function() {
        if (num == ul.children.length - 2) {
            ul.style.left = 0
            num = 0
        }
        num++
        animate(ul, -num * focusWidth)
    })

    var num = 0
    arrow_left.addEventListener('click', function() {
        if (num == 0) {
            num = ul.children.length - 2
            ul.style.left = -num * focusWidth + 'px'

        }
        num--
        animate(ul, -num * focusWidth)
    })
})