import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Ribosomes are sites for',
			answerOptions: [
				{ answerText: 'Protein Synthesis', isCorrect: true },
				{ answerText: 'Photosynthesis', isCorrect: false },
				{ answerText: 'Fat Synthesis', isCorrect: false },
				{ answerText: 'Respiration', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Pollination by birds is called?',
			answerOptions: [
				{ answerText: 'autogamy', isCorrect: false },
				{ answerText: 'entomophily', isCorrect: false },
				{ answerText: 'anemophily', isCorrect: false },
				{ answerText: 'ornithophily', isCorrect: true },
			],
		},
		{
			questionText: 'The fastest-running terrestrial animal is:',
			answerOptions: [
				{ answerText: 'cheetah', isCorrect: true },
				{ answerText: 'lion', isCorrect: false },
				{ answerText: 'human', isCorrect: false },
				{ answerText: 'mouse', isCorrect: false },
			],
		},
		{
			questionText: 'The only species of cat that lives and hunts in groups is:',
			answerOptions: [
				{ answerText: 'leopard', isCorrect: false },
				{ answerText: 'lion', isCorrect: true },
				{ answerText: 'jaguar', isCorrect: false },
				{ answerText: 'cougar', isCorrect: false },
			],
		},
		{
			questionText: 'In which country was a method for making rust-resistant iron discovered in the fifth century B.C.?',
			answerOptions: [
				{ answerText: 'Sumeria', isCorrect: false },
				{ answerText: 'India', isCorrect: true },
				{ answerText: 'Egypt', isCorrect: false },
				{ answerText: 'Babylon', isCorrect: false },
			],
		},
		{
			questionText: 'At room temperature, most elements are in which phase of matter?',
			answerOptions: [
				{ answerText: 'Plasma', isCorrect: false },
				{ answerText: 'Liquid', isCorrect: false },
				{ answerText: 'Solid', isCorrect: true },
				{ answerText: 'Gas', isCorrect: false },
			],
		},
		{
			questionText: 'The Statue of Liberty is green because of:',
			answerOptions: [
				{ answerText: 'Original Color', isCorrect: false },
				{ answerText: 'green stone', isCorrect: false },
				{ answerText: 'oxidized brass', isCorrect: false },
				{ answerText: 'oxidized copper', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<>
			<div>
				<h3 className='animate-character heading'>Quiz Web App</h3>
			</div>
			<div className='app'>
				{showScore ? (
					<div className='score-section'>
						You scored {score} out of {questions.length}
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
			</div>
		</>
	);
}