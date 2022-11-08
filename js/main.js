// Add/Create a contact
document
  .getElementById('create-user-btn')
  .addEventListener('click', function (e) {
    e.preventDefault()

    // Create and add the value from the name Input
    let name = document.createElement('input')
    name.value = document.getElementById('name-input').value

    // Create and add the value from the phone Input
    let phone = document.createElement('input')
    phone.value = document.getElementById('phone-input').value

    // Getting the element to display the message
    let message = document.getElementById('message')

    // Check that name not empty
    if (name.value !== '') {
      name.id = 'name'
      name.disabled = true
    } else {
      return (message.style.display = 'block')
    }
    // Check that phone not empty
    if (phone.value !== '') {
      phone.id = 'phone'
      phone.disabled = true
    } else {
      return (message.style.display = 'block')
    }

    message.style.display = 'none'

    // Create the edit button
    let edit_user_btn = document.createElement('button')
    edit_user_btn.id = 'edit-user-btn'
    edit_user_btn.innerText = 'Ändra'

    // Change/Save a contact
    edit_user_btn.addEventListener('click', function (e) {
      edit_user(e)
    })

    // Create the remove button
    let delete_user_btn = document.createElement('button')
    delete_user_btn.id = 'delete-user-btn'
    delete_user_btn.innerText = 'x'

    //Remove the selected li
    delete_user_btn.addEventListener('click', function (e) {
      delete_contact(e)
    })

    // Create and add the current li into the the ul
    let li = document.createElement('li')

    li.append(name, phone, edit_user_btn, delete_user_btn)

    document.getElementById('list-of-contacts').append(li)

    // empty ther values for the inputs
    document.getElementById('name-input').value = ''
    document.getElementById('phone-input').value = ''
  })

// Function remove all contacts
function remove_all_contacts() {
  let list_of_contacts = document.getElementById('list-of-contacts')

  while (list_of_contacts.hasChildNodes()) {
    list_of_contacts.removeChild(list_of_contacts.firstChild)
  }
}

// Function edit user
function edit_user(e) {
  let name = e.target.previousSibling.previousSibling
  let phone = e.target.previousSibling

  if (e.target.innerText === 'Spara') {
    name.value = e.target.previousSibling.previousSibling.value
    phone.value = e.target.previousSibling.value

    name.style.backgroundColor = 'transparent'
    phone.style.backgroundColor = ' transparent'

    // Check that name not empty
    if (name.value !== '') {
      name.disabled = true
    } else {
      return (message.style.display = 'block')
    }

    // Check that phone not empty
    if (phone.value !== '') {
      phone.disabled = true
    } else {
      return (message.style.display = 'block')
    }

    message.style.display = 'none'

    e.target.innerText = 'Ändra'
  } else {
    name.disabled = false
    phone.disabled = false
    name.style.backgroundColor = '#FFC0CB'
    phone.style.backgroundColor = ' #FFC0CB'
    e.target.innerText = 'Spara'
  }
}

// Delete a contact
function delete_contact(e) {
  e.target.parentNode.remove()
}
