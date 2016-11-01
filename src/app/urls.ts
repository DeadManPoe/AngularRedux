
const domain = 'http://localhost:8080';


export const urls = {
    login : domain+'/userauth',
    register : domain+'/user',
    token : domain+'/auth',
    books : (id)=>{
        return domain+'/books/'+id;
    }
};