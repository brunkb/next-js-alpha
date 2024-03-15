state = {
    isLoading: true,
    users: [],
    error: null
};
getFetchUsers() {
    this.setState({
        loading: true
    }, () => {
        fetch("http://localhost:3000/posts").then(res => res.json()).then(result => this.setState({
            loading: false,
            users: result
        })).catch(console.log);
    });
}
componentDidMount() {
    this.getFetchUsers();
}
render() {
    const {
        users,
        error
    } = this.state;