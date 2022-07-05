$(document).ready(function() {


	var today = new Date();
  	var dd = String(today.getDate()).padStart(2, '0');
  	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  	var yyyy = today.getFullYear();
  	var today = mm + '/' + dd + '/' + yyyy;

  	$('.current-recent-mail').text(today + ' -')


	// Applying Scroll Bar

	const ps = new PerfectScrollbar('.message-box-scroll');
	const mailScroll = new PerfectScrollbar('.mail-sidebar-scroll', {
		suppressScrollX : true
	});

	function mailInboxScroll() {
		$('.mailbox-inbox .collapse').each(function(){ const mailContainerScroll = new PerfectScrollbar($(this)[0], {
			suppressScrollX : true
		}); });
	}
	mailInboxScroll();


	/*
		fn. dynamicBadgeNotification ==> Get the badge count for mail sidebar
	*/
	function dynamicBadgeNotification( setMailCategoryCount ) {
		var mailCategoryCount = setMailCategoryCount;

		// Get Parents Div(s)
		var get_ParentsDiv = $('.mail-item');
		var get_MailInboxParentsDiv = $('.mail-item.mailInbox');
		var get_UnreadMailInboxParentsDiv = $('[id*="unread-"]');
		var get_DraftParentsDiv = $('.mail-item.draft');

		// Get Parents Div(s) Counts
		var get_MailInboxElementsCount = get_MailInboxParentsDiv.length;
		var get_UnreadMailInboxElementsCount = get_UnreadMailInboxParentsDiv.length;
		var get_DraftElementsCount = get_DraftParentsDiv.length;

		// Get Badge Div(s)
		var getBadgeMailInboxDiv = $('#mailInbox .mail-badge');
		var getBadgeDraftMailDiv = $('#draft .mail-badge');

		if (mailCategoryCount === 'mailInbox') {
			if (get_UnreadMailInboxElementsCount === 0) {
				getBadgeMailInboxDiv.text('');
				return;
			}
			getBadgeMailInboxDiv.text(get_UnreadMailInboxElementsCount);
		} else if (mailCategoryCount === 'draftmail') {
			if (get_DraftElementsCount === 0) {
				getBadgeDraftMailDiv.text('');
				return;
			}
			getBadgeDraftMailDiv.text(get_DraftElementsCount);
		}
	}

	dynamicBadgeNotification('mailInbox');
	dynamicBadgeNotification('draftmail');

	// Open Modal on Compose Button Click
	$('#btn-compose-mail').on('click', function(event) {
		$('#btn-send').show();
		$('#btn-reply').hide();
		$('#btn-fwd').hide();
		$('#composeMailModal').modal('show');

		// Save And Reply Save
		$('#btn-save').show();
		$('#btn-reply-save').hide();
		$('#btn-fwd-save').hide();
	})

	/*
		Init. fn. checkAll ==> Checkbox check all
	*/
	document.getElementById('inboxAll').addEventListener('click', function() {
		var getActiveList = document.querySelectorAll('.tab-title .list-actions.active');
		var getActiveListID = '.'+getActiveList[0].id;

		var getItemsCheckboxes = '';

		if (getActiveList[0].id === 'personal' || getActiveList[0].id === 'work' || getActiveList[0].id === 'social' || getActiveList[0].id === 'private') {

			getItemsGroupCheckboxes = document.querySelectorAll(getActiveListID);
			for (var i = 0; i < getItemsGroupCheckboxes.length; i++) {
				getItemsGroupCheckboxes[i].parentNode.parentNode.parentNode;

				getItemsCheckboxes = document.querySelectorAll('.'+getItemsGroupCheckboxes[i].parentNode.parentNode.parentNode.className.split(' ')[0] + ' ' + getActiveListID + ' .inbox-chkbox');
				
				if (getItemsCheckboxes[i].checked) {
					getItemsCheckboxes[i].checked = false;
				} else {
					if (this.checked) {
						getItemsCheckboxes[i].checked = true;
					}
				}
			}

		} else {
			getItemsCheckboxes = document.querySelectorAll('.mail-item'+getActiveListID + ' .inbox-chkbox');
			for (var i = 0; i < getItemsCheckboxes.length; i++ ) {
				if (getItemsCheckboxes[i].checked) {
					getItemsCheckboxes[i].checked = false;
				} else {
					if (this.checked) {
						getItemsCheckboxes[i].checked = true;
					}
				}
			}
		}
	})

	// Search on each key pressed

	$('.input-search').on('keyup', function() {
	  var rex = new RegExp($(this).val(), 'i');
	    $('.message-box .mail-item').hide();
	    $('.message-box .mail-item').filter(function() {
	        return rex.test($(this).text());
	    }).show();
	});

	// Tooltip

	$('[data-toggle="tooltip"]').tooltip({
	    'template': '<div class="tooltip actions-btn-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
	})

	// Triggered when mail is Closed

	$('.close-message').on('click', function(event) {
		event.preventDefault();
		$('.content-box .collapse').collapse('hide')
		$(this).parents('.content-box').css({
			width: '0',
			left: 'auto',
			right: '-46px'
		});
	});

	// Open Mail Sidebar on resolution below or equal to 991px.

	$('.mail-menu').on('click', function(e){
		$(this).parents('.mail-box-container').children('.tab-title').addClass('mail-menu-show')
		$(this).parents('.mail-box-container').children('.mail-overlay').addClass('mail-overlay-show')
	})

	// Close sidebar when clicked on ovelay ( and ovelay itself ).

	$('.mail-overlay').on('click', function(e){
		$(this).parents('.mail-box-container').children('.tab-title').removeClass('mail-menu-show')
		$(this).removeClass('mail-overlay-show')
	})

	/*
		fn. contentBoxPosition ==> Triggered when clicked on any each mail to show the mail content.
	*/
	function contentBoxPosition() {
		$('.content-box .collapse').on('show.bs.collapse', function(event) {
			var getCollpaseElementId = this.id;
			var getSelectedMailTitleElement = $('.content-box').find('.mail-title');
			var getSelectedMailContentTitle = $(this).find('.mail-content').attr('data-mailTitle');
			$(this).parent('.content-box').css({
				width: '100%',
				left: '0',
				right: '100%'
			});
			$(this).parents('#mailbox-inbox').find('.message-box [data-target="#'+getCollpaseElementId+'"]').parents('.mail-item').removeAttr('id');
			getSelectedMailTitleElement.text(getSelectedMailContentTitle);
			getSelectedMailTitleElement.attr('data-selectedMailTitle', getSelectedMailContentTitle);
			dynamicBadgeNotification('mailInbox');
		})
	}
	function stopPropagations() {
		$('.mail-item-heading .mail-item-inner .new-control, .mail-item-heading .mail-item-inner .new-control-input').on('click', function(e){
		    e.stopPropagation();
		    // e.bubble();
			// console.log(e)
			console.log('sdfsf')
			if (e.isPropagationStopped) {
				console.log('yes')
				console.timeLog()
				console.log(e)

			} else {
				console.log('no')
			}
		})
	}

	/*
		====================
			Quill Editor
		====================
	*/

	var quill = new Quill('#editor-container', {
	  modules: {
	    toolbar: [
	      [{ header: [1, 2, false] }],
	      ['bold', 'italic', 'underline'],
	      ['image', 'code-block']
	    ]
	  },
	  placeholder: 'Compose an epic...',
	  theme: 'snow'  // or 'bubble'
	});

	// Validating input fields

	var $_getValidationField = document.getElementsByClassName('validation-text');
	var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	getEmailToInput = document.getElementById('m-to');

	getEmailToInput.addEventListener('input', function() {

	  	getEmailToInputValue = this.value;

	    if (getEmailToInputValue == "") {
	      $_getValidationField[0].innerHTML = 'Email Required';
	      $_getValidationField[0].style.display = 'block';
	    } else if((emailReg.test(getEmailToInputValue) == false)) {
	      $_getValidationField[0].innerHTML = 'Invalid Email';
	      $_getValidationField[0].style.display = 'block';
	    } else {
	      $_getValidationField[0].style.display = 'none';
	    }
	})

	getCCEmailInput = document.getElementById('m-cc');
	getCCEmailInput.addEventListener('input', function() {

	    getCCEmailInputValue = this.value;

	    if (!getCCEmailInputValue == "") {
	       if((emailReg.test(getCCEmailInputValue) == false)) {
		      $_getValidationField[1].innerHTML = 'Invalid Email';
		      $_getValidationField[1].style.display = 'block';
		    } else {
		      	$_getValidationField[1].style.display = 'none';
		    }
	    } else {
	      $_getValidationField[1].style.display = 'none';
	    }

	})

	getSubjectInput = document.getElementById('m-subject');

	getSubjectInput.addEventListener('input', function() {

	  getSubjectInput = this.value;

	  if (getSubjectInput == "") {
	    $_getValidationField[2].innerHTML = 'Subject Required';
	    $_getValidationField[2].style.display = 'block';
	  } else {
	    $_getValidationField[2].style.display = 'none';
	  }

	})

	
	/*
		=========================
			Tab Functionality
		=========================
	*/
	var $listbtns = $('.list-actions').click(function() {
		$(this).parents('.mail-box-container').find('.mailbox-inbox > .content-box').css({
			width: '0',
			left: 'auto',
			right: '-46px'
		});
		$('.content-box .collapse').collapse('hide');
		var getActionCenterDivElement = $(this).parents('.mail-box-container').find('.action-center');
	  	if (this.id == 'mailInbox') {
			var $el = $('.' + this.id).show();
			getActionCenterDivElement.removeClass('tab-trash-active');
			$('#ct > div').not($el).hide();
	  	} else if (this.id == 'personal') {
	  		$el = '.' + $(this).attr('id');
	  		$elShow = $($el).show();
	  		getActionCenterDivElement.removeClass('tab-trash-active');
		    $('#ct > div .mail-item-heading'+$el).parents('.mail-item').show();
		    $('#ct > div .mail-item-heading').not($el).parents('.mail-item').hide();
	  	} else if (this.id == 'work') {
		    $el = '.' + $(this).attr('id');
	  		$elShow = $($el).show();
	  		getActionCenterDivElement.removeClass('tab-trash-active');
		    $('#ct > div .mail-item-heading'+$el).parents('.mail-item').show();
		    $('#ct > div .mail-item-heading').not($el).parents('.mail-item').hide();
	  	} else if (this.id == 'social') {
		    $el = '.' + $(this).attr('id');
	  		$elShow = $($el).show();
	  		getActionCenterDivElement.removeClass('tab-trash-active');
		    $('#ct > div .mail-item-heading'+$el).parents('.mail-item').show();
		    $('#ct > div .mail-item-heading').not($el).parents('.mail-item').hide();
	  	} else if (this.id == 'private') {
		    $el = '.' + $(this).attr('id');
	  		$elShow = $($el).show();
	  		getActionCenterDivElement.removeClass('tab-trash-active');
		    $('#ct > div .mail-item-heading'+$el).parents('.mail-item').show();
		    $('#ct > div .mail-item-heading').not($el).parents('.mail-item').hide();
	  		getActionCenterDivElement.removeClass('tab-trash-active');
	  	} else if (this.id == 'trashed') {
	  		var $el = $('.' + this.id).show();
	  		getActionCenterDivElement.addClass('tab-trash-active');
			$('#ct > div').not($el).hide();
	  	} else {
	    	var $el = $('.' + this.id).show();
	    	getActionCenterDivElement.removeClass('tab-trash-active');
	    	$('#ct > div').not($el).hide();
	  	}
	  	$listbtns.removeClass('active');
	  	$(this).addClass('active');
	})

	setTimeout(function() {
        $(".list-actions#mailInbox").trigger('click');
    },10);

	/*
		fn. $_GET_mailItem_Reply ==> Trigger when clicked on Reply Button inside Mail Content.
	*/
	function $_GET_mailItem_Reply() {
		$(".reply").on('click', function(event) {

			// Send And Reply
			$('#btn-reply').show();
			$('#btn-send').hide();
			$('#btn-fwd').hide();

			// Save And Reply Save
			$('#btn-reply-save').show();
			$('#btn-fwd-save').hide();
			$('#btn-save').hide();
			
			$('#composeMailModal').modal('show');
		})
	}

	/*
		fn. $_GET_mailItem_Forward ==> Trigger when clicked on Forward Button inside Mail Content.
	*/
	function $_GET_mailItem_Forward() {
		$(".forward").on('click', function(event) {

			$('#btn-fwd').show();
			$('#btn-reply').hide();
			$('#btn-send').hide();

			$('#btn-fwd-save').show();
			$('#btn-reply-save').hide();
			$('#btn-save').hide();
			
			$('#composeMailModal').modal('show');
		})
	}

	$_GET_mailItem_Reply();
	$_GET_mailItem_Forward();
	contentBoxPosition();
	stopPropagations();

	$('.tab-title .nav-pills a.nav-link').on('click', function(event) {
	  $(this).parents('.mail-box-container').find('.tab-title').removeClass('mail-menu-show')
	  $(this).parents('.mail-box-container').find('.mail-overlay').removeClass('mail-overlay-show')
	})
	
});