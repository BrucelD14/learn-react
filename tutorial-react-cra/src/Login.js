export default function Login() {
    return (
        <form onSubmit={loginHandler}>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button>Login</button>
        </form>
    )
}