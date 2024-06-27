import Quiz from "../models/Quiz.js";
export class quizController{

    static async getAllQuiz(req,res){
        try{

           await Quiz.create( {
            question: 'National game of India : ',
            option_a: 'Hockey',
            option_b: 'Table tennis',
            option_c: 'Cricket',
            option_d: 'Badminton',
            correct_answer: 'option_a'
        });

        const quizes = await Quiz.findAll();
        return res.status(200).json({
            mess: 'Quiz data',
            data: quizes
        })


        }
        catch(error){
        console.error("cannot run", error);
        }

    }

}

export default quizController;