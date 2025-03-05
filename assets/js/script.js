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

})//JS尾端	
