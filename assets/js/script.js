$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//---------------------選單展開按鈕設定------------------------
	$('.js-navbar-btn').click(function () {
		$(".js-navbar").toggleClass('show');
	})
	//按鈕點擊變換狀態
	$('.js-toggle-btn button').click(function () {
		$(this).toggleClass('active');
	})
	//菜單scrollspy監聽事件(menu左滑)
	const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]');
	const navContainer = document.querySelector('.js-nav');

	firstScrollSpyEl.addEventListener('activate.bs.scrollspy', (event) => {
		const activeNavLink = navContainer.querySelector('.nav-link.active');

		if (activeNavLink) {
			navContainer.scrollLeft = activeNavLink.offsetLeft - 16;
		} else {
			navContainer.scrollLeft = 0;
		}
	});
	//切換菜單每列個數
	$(".js-nav-grid3").click(function () {
		$(this).parents(".container").find(".col-6").removeClass("col-6").addClass("col-4");
	})
	$(".js-nav-grid2").click(function () {
		$(this).parents(".container").find(".col-4").removeClass("col-4").addClass("col-6");
	})
	
	//菜單定位位置調整
	$('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        let targetId = $(this).attr('href'); // 取得目標區塊的 ID
        let targetElement = $(targetId);

        if (targetElement.length) {
            let offset = targetElement.offset().top; // 取得原始滾動位置
            let zoomFactor = 2.6; // 設定你的 zoom 值
            let adjustedOffset = offset / zoomFactor; // 修正 zoom 影響

            $('html, body').animate({
                scrollTop: adjustedOffset
            }, 300); // 平滑滾動
        }
    });

})//JS尾端	
