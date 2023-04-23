export const items = [
    {
        id: "0",
        correo: "sarareal@gmail.com",
        password: "123456"
    }
]

export function getUsuario (id){
    return items.find((item) => item.id === id);
}