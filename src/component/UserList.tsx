import React, { FC } from "react"
import { IUser } from "../types/types"

interface UserListProps {
	users: IUser[]
}

const UserList: FC<UserListProps> = ({ users }) => {
	return (
		<div>
			{users.map(user => (
				<div key={user.id} style={{ padding: 15, border: "1px solid gray", marginTop: 10 }}>
					{user.id}. {user.name}. {user.email}. {user.address.zipcode}. в городе {user.address.city}{" "}
					на улице {user.address.street}
				</div>
			))}
		</div>
	)
}

export default UserList
