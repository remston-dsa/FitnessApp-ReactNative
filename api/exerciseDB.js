import axios from 'axios';

const baseUrl = 'https://exercisedb.p.rapidapi.com/exercises';

const apiCall = async (url, params) => {
    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'X-RapidAPI-Key': 'a40a333e6amsh6f4739eeba81bc1p169cebjsnb735111b0c37',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data;
    } catch (err) {
        console.log('error: ', err.message);
    }
};

export const fetchExercisesByBodypart = async (bodyPart) => {
    try {
        let data = await apiCall(`${baseUrl}/bodyPart/${bodyPart}`);
        return data;
    } catch (error) {
        console.error('Error fetching exercises:', error);
        throw error; // Propagate the error for further handling
    }
};