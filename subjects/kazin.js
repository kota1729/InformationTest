(function () {
    const SUBJECT_ID = "kazin";
    const SUBJECT_NAME = "科学と人間生活";
    const SUBJECT_ORDER = 5;

    const questions = [
            
    ];

    window.QUIZ_SUBJECTS = window.QUIZ_SUBJECTS || {};
    window.QUIZ_SUBJECTS[SUBJECT_ID] = {
        id: SUBJECT_ID,
        name: SUBJECT_NAME,
        order: SUBJECT_ORDER,
        questions: questions
    };
})();
