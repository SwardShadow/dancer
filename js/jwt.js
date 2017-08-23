/**
 * Created by lenovo on 2017/7/5.
 */

//����
/*************************�˴���bug**************************/
/*$(function () {
 $("#fullpage").fullpage();
 })*/

//ͷ���� ��ʾ������
$("#head li.spe").mouseenter(function () {
    $("#head div.block").slideDown(500);
});
$("#head div.block").mouseleave(function () {
    $(this).slideUp(500);
});

//�̶����� ��ά�� �ٷ�΢��
$("#words .gzh").mouseenter(function () {
    $("#words .er4").show(50);
});
$("#words .gzh").mouseleave(function () {
    $("#words .er4").hide(50);
});

//�̶����� ����
$("#share .music1").click(function () {
    $(this).hide();
    $("#share .music2").show();
    $("#music")[0].pause();
});
$("#share .music2").click(function () {
    $(this).hide();
    $("#share .music1").show();
    $("#music")[0].play();
});

//�̶����� ��½
$("#share .login1").click(function () {
    $(this).hide();
    $("#share .login2").show();
});
$("#share .login2").click(function () {
    $(this).hide();
    $("#share .login1").show();
});

//��½΢��
$("#share .index1").mouseenter(function () {
    $(this).attr("src", "img/index11.png");
}).mouseleave(function () {
    $(this).attr("src", "img/index1.png");
});

//��½����
$("#share .index2").mouseenter(function () {
    $(this).attr("src", "img/index22.png");
}).mouseleave(function () {
    $(this).attr("src", "img/index2.png");
});

//��½΢��
$("#share .index3").mouseenter(function () {
    $(this).attr("src", "img/index33.png");
}).mouseleave(function () {
    $(this).attr("src", "img/index3.png");
});

//��½�ռ�
$("#share .index4").mouseenter(function () {
    $(this).attr("src", "img/index44.png");
}).mouseleave(function () {
    $(this).attr("src", "img/index4.png");
});

//�̶����� ¥����Ծ
$("#san p:eq(0)").mouseenter(function () {
    $(this).removeClass("bg");
    $(this).addClass("bgg bg1");
}).mouseleave(function () {
    $(this).removeClass("bgg bg1");
    $(this).addClass("bg");
});
$("#san p:eq(1)").mouseenter(function () {
    $(this).removeClass("bg");
    $(this).addClass("bgg bg2");
}).mouseleave(function () {
    $(this).removeClass("bgg bg2");
    $(this).addClass("bg");
});
$("#san p:eq(2)").mouseenter(function () {
    $(this).removeClass("bg");
    $(this).addClass("bgg bg3");
}).mouseleave(function () {
    $(this).removeClass("bgg bg3");
    $(this).addClass("bg");
});
//¥����Ծ
move($("#san p:eq(0)")[0], my$("one"));
move($("#san p:eq(1)")[0], my$("two"));
move($("#san p:eq(2)")[0], my$("three"));

//��ɫ����
$("#gunlun .bai1").fadeIn(200,function f1() {
    $(this).fadeOut(200,function() {
        $("#gunlun .bai2").fadeIn(200,function() {
            $(this).fadeOut(200,function () {
                $("#gunlun .bai3").fadeIn(200,function() {
                    $(this).fadeOut(200,function() {
                        $("#gunlun .bai1").fadeIn(200,f1)
                    });
                });
            });
        });
    });

});


//��һ�� ��������
$("#down .onedown1").mouseenter(function () {
    $(this).attr("src", "img/onedown11.png");
}).mouseleave(function () {
    $(this).attr("src", "img/onedown1.png");
});
$("#down .onedown2").mouseenter(function () {
    $(this).attr("src", "img/onedown22.png");
}).mouseleave(function () {
    $(this).attr("src", "img/onedown2.png");
});
//��һ�� ͼƬ��Ч
//����
$("#qiu .qiu1").fadeIn(500,function f1() {
    $(this).fadeOut(500);
    $("#qiu .qiu2").fadeIn(500,function() {
        $(this).fadeOut(500);
        $("#qiu .qiu3").fadeIn(500,function() {
            $(this).fadeOut(500);
            $("#qiu .qiu1").fadeIn(500,f1)
        })
    });
});
//��ͷ
$("#jiantou .oneicon1").fadeIn(1000,function f2() {
    $(this).fadeOut(1000,function() {
        $("#jiantou .oneicon1").fadeIn(1000,f2)
    });
});
$("#jiantou .oneicon3").fadeIn(1000,function f2() {
    $(this).fadeOut(1000,function() {
        $("#jiantou .oneicon3").fadeIn(1000,f2)
    });
});
$("#jiantou .oneicon4").fadeIn(1000,function f2() {
    $(this).fadeOut(1000,function() {
        $("#jiantou .oneicon4").fadeIn(1000,f2)
    });
});
$("#jiantou .oneicon5").fadeIn(1000,function f2() {
    $(this).fadeOut(1000,function() {
        $("#jiantou .oneicon5").fadeIn(1000,f2)
    });
});

//�ڶ��� ��������
//��̬Ч��
$("#fashion .dong1tu").fadeIn(1000, function f1() {
    $(this).fadeOut(1000, function () {
        $("#fashion .dong2tu").fadeIn(1000, function () {
            $(this).fadeOut(1000, function () {
                $("#fashion .dong3tu").fadeIn(1000, function () {
                    $(this).fadeOut(1000, function() {
                        $("#fashion .dong1tu").fadeIn(1000,f1)
                    });
                })
            });
        })
    });

})
//ͼƬ����
$(window).scroll(function () {
    if ($(document).scrollTop() >= 400&&$(document).scrollTop()<=1300) {
        $("#news .one").show(500, function f1() {
            $(this).next().fadeIn(500, f1);
        });
        $("#right .twopeople").show(500, function () {
            $("#fashion img:first").show(500, function () {
                $(this).next().show(500, function () {
                    $(this).next().show(500);
                });
            });
        });

    }else{
        $("#news .one").hide();
        $("#news .two").hide();
        $("#news .three").hide();
        $("#news .four").hide();
        $("#fashion .im1").hide();
        $("#fashion .im2").hide();
        $("#fashion .im3").hide();
        $("#right .twopeople").hide();
    }

});
//第一个tab
$("#news .zx").mouseenter(function () {
  $(this).removeClass();
  $(this).addClass("bg");
  $("#news .nul li:eq(0)").addClass("show");
  $("#news .nul li:eq(1)").removeClass("show");
  $("#news .nul li:eq(2)").removeClass("show");
  $("#news .nul li:eq(3)").removeClass("show");
}).mouseleave(function () {
  $(this).removeClass("bg");
  $("#news .nul li:eq(0)").addClass("show");
});
//第二个tab
$("#news .xw").mouseenter(function () {
  $(this).removeClass();
  $(this).addClass("bg");
  $("#news .nul li:eq(1)").addClass("show");
  $("#news .nul li:eq(0)").removeClass("show");
  $("#news .nul li:eq(2)").removeClass("show");
  $("#news .nul li:eq(3)").removeClass("show");
}).mouseleave(function () {
  $(this).removeClass("bg");
  $("#news .nul li:eq(1)").addClass("show");
});
//第三个tab
$("#news .gg").mouseenter(function () {
  $(this).removeClass();
  $(this).addClass("bg");
  $("#news .nul li:eq(2)").addClass("show");
  $("#news .nul li:eq(1)").removeClass("show");
  $("#news .nul li:eq(0)").removeClass("show");
  $("#news .nul li:eq(3)").removeClass("show");
}).mouseleave(function () {
  $(this).removeClass("bg");
  $("#news .nul li:eq(2)").addClass("show");
});
//第四个tab
$("#news .hd").mouseenter(function () {
  $(this).removeClass();
  $(this).addClass("bg");
  $("#news .nul li:eq(3)").addClass("show");
  $("#news .nul li:eq(1)").removeClass("show");
  $("#news .nul li:eq(2)").removeClass("show");
  $("#news .nul li:eq(0)").removeClass("show");
}).mouseleave(function () {
  $(this).removeClass("bg");
  $("#news .nul li:eq(3)").addClass("show");
});
//���Ҽ�ͷ�ı仯
$("#news .im1").mouseenter(function () {
    $(this).attr("src", "img/twonewsll.png");
}).mouseleave(function () {
    $(this).attr("src", "img/twonewsleft.png");
});
$("#news .im2").mouseenter(function () {
    $(this).attr("src", "img/twonewsrr.png");
}).mouseleave(function () {
    $(this).attr("src", "img/twonewsright.png");
});

//�������ֲ�

var arrli = [
    {width: 790, height: 570, left: 270, top: 90, zIndex: 5, opacity: 1},//ǰ��
    {width: 580, height: 400, left: 87, top: 180, zIndex: 4, opacity: 0.6},//���
    {width: 580, height: 400, left: 700, top: 180, zIndex: 4, opacity: 0.6},//�ұ�
    {width: 580, height: 400, left: 400, top: 180, zIndex: 3, opacity: 0.2} //���
]
var arrim = [
    {height: 450, left: 0, top: 60},//ǰ��
    {height: 290, left: 0, top: 50},//���
    {height: 290, left: 0, top: 50},//�ұ�
    {height: 290, left: 0, top: 50},//���
]
var arrimm = [
    {height: 570, right: 0, top: 0},//ǰ��
    {height: 400, right: 0, top: 0},//���
    {height: 400, right: 0, top: 0},//�ұ�
    {height: 400, right: 0, top: 0},//���
]
var li1 = my$("pic").children[0].children[0];
var li2 = my$("pic").children[0].children[1];
var li3 = my$("pic").children[0].children[2];
var li4 = my$("pic").children[0].children[3];
//���li2�¼�
li2.onclick = function () {
    //li2ת��ǰ��
    animate(li2, arrli[0]);
    animate(li2.children[0], arrim[0]);
    animate(li2.children[1], arrimm[0]);
    //li4ת�����
    animate(li4, arrli[1]);
    animate(li4.children[0], arrim[1]);
    animate(li4.children[1], arrimm[1]);
    //li1ת���ұ�
    animate(li1, arrli[2]);
    animate(li1.children[0], arrim[2]);
    animate(li1.children[1], arrimm[2]);
    //li3ת�����
    animate(li3, arrli[3]);
    animate(li3.children[0], arrim[3]);
    animate(li3.children[1], arrimm[3]);
}
//���li4�¼�
li4.onclick = function () {
    //li4ת��ǰ��
    animate(li4, arrli[0]);
    animate(li4.children[0], arrim[0]);
    animate(li4.children[1], arrimm[0]);
    //li3ת�����
    animate(li3, arrli[1]);
    animate(li3.children[0], arrim[1]);
    animate(li3.children[1], arrimm[1]);
    //li2ת���ұ�
    animate(li2, arrli[2]);
    animate(li2.children[0], arrim[2]);
    animate(li2.children[1], arrimm[2]);
    //li1ת�����
    animate(li1, arrli[3]);
    animate(li1.children[0], arrim[3]);
    animate(li1.children[1], arrimm[3]);

}
//���li3�¼�
li3.onclick = function () {
    //li3ת��ǰ��
    animate(li3, arrli[0]);
    animate(li3.children[0], arrim[0]);
    animate(li3.children[1], arrimm[0]);
    //li1ת�����
    animate(li1, arrli[1]);
    animate(li1.children[0], arrim[1]);
    animate(li1.children[1], arrimm[1]);
    //li4ת���ұ�
    animate(li4, arrli[2]);
    animate(li4.children[0], arrim[2]);
    animate(li4.children[1], arrimm[2]);
    //li2ת�����
    animate(li2, arrli[3]);
    animate(li2.children[0], arrim[3]);
    animate(li2.children[1], arrimm[3]);
}
//���li1�¼�
li1.onclick = function () {
    //li1ת��ǰ��
    animate(li1, arrli[0]);
    animate(li1.children[0], arrim[0]);
    animate(li1.children[1], arrimm[0]);
    //li2ת�����
    animate(li2, arrli[1]);
    animate(li2.children[0], arrim[1]);
    animate(li2.children[1], arrimm[1]);
    //li3ת���ұ�
    animate(li3, arrli[2]);
    animate(li3.children[0], arrim[2]);
    animate(li3.children[1], arrimm[2]);
    //li4ת�����
    animate(li4, arrli[3]);
    animate(li4.children[0], arrim[3]);
    animate(li4.children[1], arrimm[3]);
}

