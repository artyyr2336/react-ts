import axios from "axios"
import React, { useEffect, useState } from "react"
import Card, { CardVariant } from "./component/Card"
import List from "./component/List"
import UserList from "./component/UserList"
import { IUser } from "./types/types"

const App = () => {
	const [users, setUsers] = useState<IUser[]>([])

	const getUsers = async () => {
		try {
			const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
			setUsers(response.data)
		} catch (e) {
			alert(e)
		}
	}

	useEffect(() => {
		getUsers()
	}, [])

	return (
		<>
			<Card
				width="200px"
				onClick={num => console.log(num)}
				height="200px"
				variant={CardVariant.primary}
			>
				<button>123</button>
			</Card>
			<UserList users={users} />
			<List items={users} renderItem={(user: IUser) => <UserItem />} />
		</>
	)
}

export default App
