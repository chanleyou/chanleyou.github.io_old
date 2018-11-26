const vm = new Vue({
	el: "#app",
	data: {
		scroll: 0,
		about: '',
		proj: '',
		contact: '',
	},
	methods: {
		handleScroll: function () {
			this.scroll = window.scrollY;
		}
	},
	computed: {
		navPosition: function () {
			this.about = '';
			this.proj = '';
			this.contact = '';

			// is there a way to rewrite this using (this.scroll >= element.offsetTop && this.scroll < element.nextElementSibling.offsetTop)
			// how do I pass in the element in Vue?
			if (this.scroll >= aboutme.offsetTop && this.scroll < projects.offsetTop) {
				this.about = 'active';
			}
			if (this.scroll >= projects.offsetTop && this.scroll < document.body.scrollHeight - window.innerHeight - 1) {
				this.proj = 'active';
			}
			if (this.scroll >= document.body.scrollHeight - window.innerHeight - 1) {
				this.contact = 'active';
			}
			if (this.scroll >= aboutme.offsetTop - navbar.clientHeight) {
				return 'fixed-top';
			}
		}
	},

	created() {
		this.scroll = window.scrollY;
		window.addEventListener('scroll', this.handleScroll);
	}
})