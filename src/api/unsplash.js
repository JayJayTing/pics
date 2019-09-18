import axios from "axios";

export default axios.create({
	//creates a customized copy with predefined things
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID d013c75a1cd43e3a01e266b8a0a847f6104ab9fb594a5e2595dab97fbcdfd56d"
	}
});
