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

	//菜單定位調整
	$(".nav-link").click(function (e) {
		e.preventDefault(); // 阻止預設跳轉行為

		let targetId = $(this).attr("href"); // 取得錨點 ID
		let targetElement = $(targetId);

		if (targetElement.length) {
			let targetOffset = targetElement.offset().top; // 取得錨點的原始位置
			let scrollTo = targetOffset - 280; // 計算讓錨點到視口指定的滾動位置

			$("html, body").animate({ scrollTop: scrollTo }, 300); // 平滑滾動到指定位置
		}
	});

})//JS尾端	
