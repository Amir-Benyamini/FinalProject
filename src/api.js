export const getLessons = async function() {
	try {
		const response = await fetch('http://localhost:5000/alLessons', {
			method: 'get',
			mode: 'cors',
			headers: {
				"Access-Control-Allow-Origin": "*"
			}
		});
		let lessons = await response.json()
		return lessons;
	} catch (error) {
		console.error(error);
	}
}

export const getUsers = async function() {
	try {
		const response = await fetch('http://localhost:5000/user', {
			method: 'get',
			mode: 'cors',
			headers: {
				"Access-Control-Allow-Origin": "*"
			}
		});
		let users = await response.json()
		return users;
	} catch (error) {
		console.error(error);
	}
}