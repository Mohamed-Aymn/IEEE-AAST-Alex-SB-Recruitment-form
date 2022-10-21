import React, { useContext } from "react";
import FormDataContext from "../context/formContext";

function FinishPopup() {
    let { finishPopup, setFinishPopup, setStep, setData } =
        useContext(FormDataContext);
    return (
        <>
            {finishPopup && (
                <div className="popupContainer">
                    <div className="popup">
                        <span>Thank you for participating</span>
                        <div className="popupButtonsContainer">
                            <button
                                className="primaryButton"
                                onClick={() => {
                                    setFinishPopup(false);
                                    setStep(1);
                                    setData({
                                        // first step
                                        fullName: "",
                                        address: "",
                                        phoneNumber: "",
                                        email: "",
                                        gpa: "",
                                        semester: "",
                                        faculty: "",
                                        department: "",
                                        civilWork: "",
                                        skills: "",
                                        hobbies: "",
                                        describeYourself: "",
                                        achievemenets: "",
                                        // second step
                                        ieeeLettersAbv: "",
                                        whatDoYouKnowAboutIeee: "",
                                        whyDoYouWantToJoinIEEE: "",
                                        didAttendEvents: "",
                                        eventNames: "",
                                        // third step
                                        primaryCommittee: "",
                                        secondaryCommitee1: "",
                                        firstNonTechnicalSecondaryCommittee: "",
                                        secondNonTechnicalSecondaryCommittee:
                                            "",
                                        // fourth step
                                        ITExperience: "",
                                        technicalExperience: "",
                                        mediaExperience: "",
                                        documentationExperience: "",
                                        registrationExperience: "",
                                        operationExperience: "",
                                        // fifth step
                                        commitmentHours: "",
                                        ratherBeYourOwnBoss: "",
                                        setsYouApartFromCandidates: "",
                                        // sixth step
                                        howDidYouKnowAboutRecruitment: "",
                                        volunteersName: "",
                                        friendName: "",
                                        other: "",
                                    });
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default FinishPopup;
