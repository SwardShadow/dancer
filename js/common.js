/**
 * Created by lenovo on 2017/7/5.
 */
function my$(id) {
    return document.getElementById(id);
};
//��������
function animate(c, a, b) {
    clearInterval(c.timer);
    c.timer = setInterval(function () {
        var d = true;
        for (var e in a) {
            if (e == "opacity") {
                var g = getStyle(c, e) * 100;
                var h = a[e] * 100;
                var f = (h - g) / 10;
                f = f > 0 ? Math.ceil(f) : Math.floor(f);
                g = g + f;
                c.style[e] = g / 100
            } else {
                if (e == "zIndex") {
                    c.style[e] = a[e]
                } else {
                    var g = parseInt(getStyle(c, e)) || 0;
                    var h = a[e];
                    var f = (h - g) / 10;
                    f = f > 0 ? Math.ceil(f) : Math.floor(f);
                    g = g + f;
                    c.style[e] = g + "px"
                }
            }
            console.log("target: " + h + "leader: " + g + "step: " + f);
            if (g != h) {
                d = false
            }
        }
        if (d) {
            clearInterval(c.timer);
            if (b) {
                b()
            }
        }
    }, 15)
}
//���ݴ���
function getStyle(b, a) {
    if (b.currentStyle) {
        return b.currentStyle[a]
    } else {
        return window.getComputedStyle(b, null)[a]
    }
};
//����������
function move(element1, element2) {
    var timer = null;
    element1.onclick = function () {
        var current = pageYOffset;
        var target = element2.offsetTop;
        //���ö�ʱ����
        clearInterval(timer);
        timer = setInterval(function () {
            //��ȡ����
            var step = (target - current) / 10;
            //����������ȡ����С��������ȡ��
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            //��ֵ
            current = current + step;
            window.scrollTo(0, current);
            //�����ʱ��
            if (target == current) {
                clearInterval(timer);
            }
        }, 10);
    }
}

