const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
			],
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			crearUsuario: () => {
				fetch("https://playground.4geeks.com/contact/agendas/lohan", {
					method:"POST",
					headers: {
						"Content-Type": "application/json" 
					},
					body: JSON.stringify({slug: "lohan"})
				})
				.then((response) => response.json())
				.then((data) => console.log(data))
				.catch((error) => console.error(error))

			},

			obtenerInformacion: () => {
				fetch("https://playground.4geeks.com/contact/agendas/lohan/contacts", {
					method: "GET"
				})
				.then((response) => {console.log(response);
			
					if(response.status == 404)
					{
						getActions().crearUsuario();
						alert("El usuario no existe!")
					}

					return response.json()})
				.then((data) => setStore({contacts: data.contacts}))
				.catch((error) => console.error(error))
			},

			agregarContacto: (nuevoContacto) => {
				console.log(JSON.stringify(nuevoContacto) + "flux")
				fetch("https://playground.4geeks.com/contact/agendas/lohan/contacts", {
					method:"POST",
					headers: {
						"Content-Type": "application/json" 
					},
					body: JSON.stringify(nuevoContacto)
				})
				.then((response) => response.json())
				.then((data) => console.log(data))
				.catch((error) => console.log(error))
			},

			eliminarContacto: (index) => {
				console.log(index)
				fetch(`https://playground.4geeks.com/contact/agendas/lohan/contacts/${index}`, {
					method:"DELETE",
				})

				.then((response) => {
					
					if(response.ok)
					{
						getActions().obtenerInformacion();
					}
					
					return response.json()})
				.then((data) => console.log(data))
				.catch((error) => console.error(error))

			},

			editarContacto: (index, event) => {
	
				// event.preventDefault();

				const nuevoContacto = {
					name: event.target.name.value,
					phone: event.target.phone.value,
					email: event.target.email.value,
					address: event.target.address.value
				};

				console.log(nuevoContacto)

				fetch(`https://playground.4geeks.com/contact/agendas/lohan/contacts/${index}`, {
					method:"PUT",
					headers: {
						"Content-Type": "application/json" 
					},
					body: JSON.stringify(nuevoContacto)
				})

				.then((response) => response.json())
				.then((data) => console.log(data))
				.catch((error) => console.error(error))

			},


			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
