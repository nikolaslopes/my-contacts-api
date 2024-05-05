const { v4: uuidv4 } = require('uuid')

const contacts = [
	{
		id: uuidv4(),
		name: 'Nick',
		email: 'nick@email.com',
		phone: '111111111',
		category_id: uuidv4(),
	},
  {
    id: uuidv4(),
    name: 'Kiki',
    email: 'kiki@email.com',
    phone: '2222222',
    category_id: uuidv4(),
  }
]

class ContactsRepository {
	findAll() {
		return new Promise((resolve) => {
			resolve(contacts)
		})
	}

	findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id))
    })
  }
}

module.exports = new ContactsRepository()
