import "../assets/styles/footer.styl"

export default {
    data () {
        return {
            author:"codejiejie"

        }
    },
    render () {

        return (
            <div id="footer">
                <span>Write By {this.author}</span>
            </div>
        )
    }
}