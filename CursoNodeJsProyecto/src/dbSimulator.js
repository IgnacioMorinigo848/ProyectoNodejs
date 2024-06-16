//provisorio para primer entrega
 let usuarios = [
    {
        id: 1,
        name: "juan",
        lastName: "Alberdi",
        email: "mau@gmail.com",
        password: 123,
        favoritos: [
            {
                id: 1011985,
                title: "Kung Fu Panda 4",
                release_date:" 2024-03-02 ",
                overview: "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
                poster_path: "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
            }, {
                id: 121,
                title: "he Lord of the Rings: The Two Towers",
                release_date:"2024-03-02 ",
                overview: "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
                poster_path: "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
            }
        ],
        verDespues: [
            {
                id: 984324,
                title: "The wages of fear",
                release_date:" 2024-03-02 ",
                overview: "When an explosion at an oil well threatens hundreds of lives, a crack team is called upon to make a deadly desert crossing with nitroglycerine in tow. ",
                poster_path: "/jFK2ZLQUzo9pea0jfMCHDfvWsx7.jpg",
            }, {
                id: 1636,
                title: "Bedazzled",
                release_date:" 2024-03-02 ",
                overview: "Elliot Richards, a socially awkward IT worker, is given seven wishes to get the girl of his dreams when he meets a very seductive Satan. The catch: his soul. Some of his wishes include being a 7 foot basketball star, a wealthy, powerful man, and a sensitive caring guy. But, as could be expected, the Devil puts her own little twist on each of his fantasies.",
                poster_path: "/9aIg9oKMetjfDUNH1jDJKiw2Qos.jpg",
            }
        ],
        vistas: [
            {
                id: 1011985,
                title: "Kung Fu Panda 4",
                release_date:" 2024-03-02 ",
                overview: "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
                poster_path: "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
            }
        ]
    }
]
let idSig = 1;



function getUsuario(id) {
    for (const usuario of usuarios) {
        if (usuario.id === id) {

            return usuario;
        }
    }
    return false
}

export function isFavorite(userId, movieId) {
    const user = getUsuario(userId)
    for (const favorito of user.favoritos) {
        if (favorito.id === movieId) {
            return true
        }
    }
    return false
}

export function inWatchLater(userId, movieId) {
    const user = getUsuario(userId)
    for (const ver of user.verDespues) {
        if (ver.id === movieId) {
            return true
        }
    }
    return false
}

export function inVistas(userId, movieId) {
    const user = getUsuario(userId)
    for (const vista of user.vistas) {
        if (vista.id === movieId) {
            return true
        }
    }
    return false
}

export function createUser(name, lastName, email, password) {
    //cuando se haga con DB, la password iria encriptada con bycrypt
    usuarios.push({
        id: idSig,
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        favoritos: [],
        verDespues: []
    })
    idSig++
}



export function loginUser(usuario) {
    let i = 0;
    while (i < usuarios.length && usuarios[i].email !== usuario.email)
        i++;

    return i !== usuarios.length ? usuarios[i] : alert("Usuario no encontrado")
}

export function changePassword(password, userId) {
    //cambia la contraseña
}

export function removeToFavorites(movieId, userId) {
    //para saber cual es el indice donde se encuentra el usuario buscado
    const user = getUsuario(userId)
    if (user) {
        let i = 0;

        while (i < user.favoritos.length && user.favoritos[i].id !== movieId) {
            i++;
        }
        if (i !== user.favoritos.length) {
            delete user.favoritos[i]
        }
    }


}

export function addFavorites(movie, userId) {
    //para saber cual es el indice donde se encuentra el usuario buscado
    const user = getUsuario(userId)
    if (user) {
        user.favoritos.push(movie);
    }

}

export function getFavorites(userId) {
    const user = getUsuario(userId)
    if (user) {
        return user.favoritos
    }

}


export function removeToWatchLater(entertainment, userId) {
    //para saber cual es el indice donde se encuentra el usuario buscado
    const user = getUsuario(userId)
    if (user) {
        let i = 0;

        while (i < user.verDespues.length && user.verDespues[i].id !== entertainment.id) {
            i++;
        }
        if (i !== user.verDespues.length) {
            delete user.verDespues[i]
        }
    }


}

export function addToWatchLater(movie, userId) {
    //para saber cual es el indice donde se encuentra el usuario buscado
    const user = getUsuario(userId)
    if (user) {
        user.verDespues.push(movie);
    }
}

export function getWatchLater(userId) {
    const user = getUsuario(userId)
    if (user) {
        return user.verDespues
    }


}

export function removeToVistas(entertainment, userId) {
    //para saber cual es el indice donde se encuentra el usuario buscado
    const user = getUsuario(userId)
    if (user) {
        let i = 0;

        while (i < user.vistas.length && user.vistas[i].id !== entertainment.id) {
            i++;
        }
        if (i !== user.vistas.length) {
            delete user.vistas[i]
        }
    }


}

export function addToVistas(movie, userId) {
    //para saber cual es el indice donde se encuentra el usuario buscado
    const user = getUsuario(userId)
    if (user) {
        user.vistas.push(movie);
    }
}

export function getVistas(userId) {
    const user = getUsuario(userId)
    if (user) {
        return user.vistas
    }


}
