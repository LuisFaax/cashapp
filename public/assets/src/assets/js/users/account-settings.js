/**
 * ==================
 * Single File Upload
 * ==================
*/

// We register the plugins required to do 
// image previews, cropping, resizing, etc.
FilePond.registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform,
  //   FilePondPluginImageEdit
  );
  
  // Select the file input and use 
  // create() to turn it into a pond
  FilePond.create(
    document.querySelector('.filepond'),
    {
      imagePreviewHeight: 170,
      imageCropAspectRatio: '1:1',
      imageResizeTargetWidth: 200,
      imageResizeTargetHeight: 200,
      stylePanelLayout: 'compact circle',
      styleLoadIndicatorPosition: 'center bottom',
      styleProgressIndicatorPosition: 'right bottom',
      styleButtonRemoveItemPosition: 'left bottom',
      styleButtonProcessItemPosition: 'right bottom',
      files: [
          {
              // the server file reference
              source: '../src/assets/img/user-profile.jpeg',

              // set type to limbo to tell FilePond this is a temp file
              options: {
                  type: 'image/png',
              },
          },
      ],
    }
);

// Purge Cache Notification
document.querySelector('.btn-clear-purge').addEventListener('click', function() {
    Snackbar.show({
        text: 'Cache Purged Successfully',
        pos: 'bottom-right',
        actionTextColor: '#fff',
        backgroundColor: '#805dca'
    });
})

// Delete Account Notification
document.querySelector('.btn-delete-account').addEventListener('click', function() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#e7515a',
        cancelButtonColor: '#3b3f5c',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
            'Your account has been deleted.',
            'success'
            )
        }
    })
})


// Selectable Dropdown
function selectableDropdown(getElement, myCallback) {
    var getDropdownElement = getElement;
    for (var i = 0; i < getDropdownElement.length; i++) {
        getDropdownElement[i].addEventListener('click', function() {
            
            var dataValue = this.getAttribute('data-value');
          var dataImage = this.getAttribute('data-img-value');
          
          if(dataValue === null && dataImage === null) {
              console.warn('No attributes are defined. Kindly define one attribute atleast')
          }
          
          if (dataValue != '' && dataValue != null) {
              this.parentElement.parentNode.querySelector('.dropdown-toggle > .selectable-text').innerText = dataValue;
            }
            
            if (dataImage != '' && dataImage != null) {
            this.parentElement.parentNode.querySelector('.dropdown-toggle > img').setAttribute('src', dataImage );
        }
        
    })
    }
}

selectableDropdown(document.querySelectorAll('.cardName-select .dropdown-item'));


// Add Address Fous Input
document.querySelector('.add-address').addEventListener('click', function() {
    document.querySelector(".add-billing-address-input").focus();
})

// Add Payment Fous Input
document.querySelector('.add-payment').addEventListener('click', function() {
    document.querySelector(".add-payment-method-input").focus();
})