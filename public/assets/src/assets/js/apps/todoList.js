$('.input-search').on('keyup', function() {
  var rex = new RegExp($(this).val(), 'i');
    $('.todo-box .todo-item').hide();
    $('.todo-box .todo-item').filter(function() {
        return rex.test($(this).text());
    }).show();
});

const taskViewScroll = new PerfectScrollbar('.task-text', {
    wheelSpeed:.5,
    swipeEasing:!0,
    minScrollbarLength:40,
    maxScrollbarLength:300,
    suppressScrollX : true
});
function dynamicBadgeNotification( setTodoCategoryCount ) {
  var todoCategoryCount = setTodoCategoryCount;

  // Get Parents Div(s)
  var get_ParentsDiv = $('.todo-item');
  var get_TodoAllListParentsDiv = $('.todo-item.all-list');
  var get_TodoCompletedListParentsDiv = $('.todo-item.todo-task-done');
  var get_TodoImportantListParentsDiv = $('.todo-item.todo-task-important');

  // Get Parents Div(s) Counts
  var get_TodoListElementsCount = get_TodoAllListParentsDiv.length;
  var get_CompletedTaskElementsCount = get_TodoCompletedListParentsDiv.length;
  var get_ImportantTaskElementsCount = get_TodoImportantListParentsDiv.length;

  // Get Badge Div(s)
  var getBadgeTodoAllListDiv = $('#all-list .todo-badge');
  var getBadgeCompletedTaskListDiv = $('#todo-task-done .todo-badge');
  var getBadgeImportantTaskListDiv = $('#todo-task-important .todo-badge');


  if (todoCategoryCount === 'allList') {
    if (get_TodoListElementsCount === 0) {
      getBadgeTodoAllListDiv.text('');
      return;
    }
    if (get_TodoListElementsCount > 9) {
        getBadgeTodoAllListDiv.css({
            padding: '2px 0px',
            height: '25px',
            width: '25px'
        });
    } else if (get_TodoListElementsCount <= 9) {
        getBadgeTodoAllListDiv.removeAttr('style');
    }
    getBadgeTodoAllListDiv.text(get_TodoListElementsCount);
  }
  else if (todoCategoryCount === 'completedList') {
    if (get_CompletedTaskElementsCount === 0) {
      getBadgeCompletedTaskListDiv.text('');
      return;
    }
    if (get_CompletedTaskElementsCount > 9) {
        getBadgeCompletedTaskListDiv.css({
            padding: '2px 0px',
            height: '25px',
            width: '25px'
        });
    } else if (get_CompletedTaskElementsCount <= 9) {
        getBadgeCompletedTaskListDiv.removeAttr('style');
    }
    getBadgeCompletedTaskListDiv.text(get_CompletedTaskElementsCount);
  }
  else if (todoCategoryCount === 'importantList') {
    if (get_ImportantTaskElementsCount === 0) {
      getBadgeImportantTaskListDiv.text('');
      return;
    }
    if (get_ImportantTaskElementsCount > 9) {
        getBadgeImportantTaskListDiv.css({
            padding: '2px 0px',
            height: '25px',
            width: '25px'
        });
    } else if (get_ImportantTaskElementsCount <= 9) {
        getBadgeImportantTaskListDiv.removeAttr('style');
    }
    getBadgeImportantTaskListDiv.text(get_ImportantTaskElementsCount);
  }
}

new dynamicBadgeNotification('allList');
new dynamicBadgeNotification('completedList');
new dynamicBadgeNotification('importantList');

/*
  ====================
    Quill Editor
  ====================
*/

var quill = new Quill('#taskdescription', {
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

$('#addTaskModal').on('hidden.bs.modal', function (e) {
  // do something...
  $(this)
    .find("input,textarea,select")
       .val('')
       .end();

  quill.deleteText(0, 2000);
})
$('.mail-menu').on('click', function(event) {
  $('.tab-title').addClass('mail-menu-show');
  $('.mail-overlay').addClass('mail-overlay-show');
})
$('.mail-overlay').on('click', function(event) {
  $('.tab-title').removeClass('mail-menu-show');
  $('.mail-overlay').removeClass('mail-overlay-show');
})
$('#addTask').on('click', function(event) {
  event.preventDefault();
  $('.add-tsk').show();
  $('.edit-tsk').hide();
  $('.add-title').show();
  $('.edit-title').hide();
  $('#addTaskModal').modal('show');
  const ps = new PerfectScrollbar('.todo-box-scroll', {
    suppressScrollX : true
  });
});
const ps = new PerfectScrollbar('.todo-box-scroll', {
    suppressScrollX : true
  });

const todoListScroll = new PerfectScrollbar('.todoList-sidebar-scroll', {
    suppressScrollX : true
  });

function checkCheckbox() {
  $('.todo-item input[type="checkbox"]').click(function() {
    if ($(this).is(":checked")) {
        $(this).parents('.todo-item').addClass('todo-task-done');
    }
    else if ($(this).is(":not(:checked)")) {
        $(this).parents('.todo-item').removeClass('todo-task-done');
    }
    new dynamicBadgeNotification('completedList');
  });
}

function deleteDropdown() {
  $('.action-dropdown .dropdown-menu .delete.dropdown-item').click(function() {
    if(!$(this).parents('.todo-item').hasClass('todo-task-trash')) {

        var getTodoParent = $(this).parents('.todo-item');
        var getTodoClass = getTodoParent.attr('class');

        var getFirstClass = getTodoClass.split(' ')[1];
        var getSecondClass = getTodoClass.split(' ')[2];
        var getThirdClass = getTodoClass.split(' ')[3];

        if (getFirstClass === 'all-list') {
          getTodoParent.removeClass(getFirstClass);
        }
        if (getSecondClass === 'todo-task-done' || getSecondClass === 'todo-task-important') {
          getTodoParent.removeClass(getSecondClass);
        }
        if (getThirdClass === 'todo-task-done' || getThirdClass === 'todo-task-important') {
          getTodoParent.removeClass(getThirdClass);
        }
        $(this).parents('.todo-item').addClass('todo-task-trash');
    } else if($(this).parents('.todo-item').hasClass('todo-task-trash')) {
        $(this).parents('.todo-item').removeClass('todo-task-trash');
    }
    new dynamicBadgeNotification('allList');
    new dynamicBadgeNotification('completedList');
    new dynamicBadgeNotification('importantList');
  });
}

function reviveMailDropdown() {
  $('.action-dropdown .dropdown-menu .revive.dropdown-item').on('click', function(event) {
    event.preventDefault();
    if($(this).parents('.todo-item').hasClass('todo-task-trash')) {
      var getTodoParent = $(this).parents('.todo-item');
      var getTodoClass = getTodoParent.attr('class');
      var getFirstClass = getTodoClass.split(' ')[1];
      $(this).parents('.todo-item').removeClass(getFirstClass);
      $(this).parents('.todo-item').addClass('all-list');
      $(this).parents('.todo-item').hide();
    }
    new dynamicBadgeNotification('allList');
    new dynamicBadgeNotification('completedList');
    new dynamicBadgeNotification('importantList');
  });
}

function editDropdown() {
  $('.action-dropdown .dropdown-menu .edit.dropdown-item').click(function() {

    event.preventDefault();

    var $_outerThis = $(this);
   
    $('.add-tsk').hide();
    $('.edit-tsk').show();

    $('.add-title').hide();
    $('.edit-title').show();
    

    var $_taskTitle = $_outerThis.parents('.todo-item').children().find('.todo-heading').attr('data-todoHeading');
    var $_taskText = $_outerThis.parents('.todo-item').children().find('.todo-text').attr('data-todoText');
    var $_taskJson = JSON.parse($_taskText);

    $('#task').val($_taskTitle);
    quill.setContents($_taskJson);

    $('#addTaskModal').modal('show');
  })
}

function todoItem() {
  $('.todo-item .todo-content').on('click', function(event) {
    event.preventDefault();
   
    var $_taskTitle = $(this).find('.todo-heading').attr('data-todoHeading');
    var $todoHtml = $(this).find('.todo-text').attr('data-todoHtml');

    $('.task-heading').text($_taskTitle);
    $('.task-text').html($todoHtml);
    
    $('#todoShowListItem').modal('show');
  });
}
var $btns = $('.list-actions').click(function() {
  if (this.id == 'all-list') {
    var $el = $('.' + this.id).fadeIn();
    $('#ct > div').not($el).hide();
  } else if (this.id == 'todo-task-trash') {
    var $el = $('.' + this.id).fadeIn();
    $('#ct > div').not($el).hide();
  } else {
    var $el = $('.' + this.id).fadeIn();
    $('#ct > div').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})

checkCheckbox();
deleteDropdown();
reviveMailDropdown();
editDropdown();
todoItem();


$('.tab-title .nav-pills a.nav-link').on('click', function(event) {
  $(this).parents('.mail-box-container').find('.tab-title').removeClass('mail-menu-show')
  $(this).parents('.mail-box-container').find('.mail-overlay').removeClass('mail-overlay-show')
})

// Validation Process

  var $_getValidationField = document.getElementsByClassName('validation-text');

  getTaskTitleInput = document.getElementById('task');

  getTaskTitleInput.addEventListener('input', function() {

      getTaskTitleInputValue = this.value;

      if (getTaskTitleInputValue == "") {
        $_getValidationField[0].innerHTML = 'Title Required';
        $_getValidationField[0].style.display = 'block';
      } else {
        $_getValidationField[0].style.display = 'none';
      }
  })

  getTaskDescriptionInput = document.getElementById('taskdescription');

  getTaskDescriptionInput.addEventListener('input', function() {

    getTaskDescriptionInputValue = this.value;

    if (getTaskDescriptionInputValue == "") {
      $_getValidationField[1].innerHTML = 'Description Required';
      $_getValidationField[1].style.display = 'block';
    } else {
      $_getValidationField[1].style.display = 'none';
    }

  })