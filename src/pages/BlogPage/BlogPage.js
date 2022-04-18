import React from 'react';
import './BlogPage.css'

const BlogPage = () => {
    return (
        <div className="page">
            <div className="question__container">
                <details className="question">
                    <summary className="question__summary">How Does it Work? </summary>
                    <div className="mt-3">
                        <p className="question__answer">
                            A very interesting question indeed.Do you want it to dramatically change your life forever? Well the final price for something is not always the same. It depends on the person who is willing to pay for it. The final price is determined by the person who is willing to pay for it.
                        </p>
                    </div>
                </details>

                <details className="question">
                    <summary className="question__summary">How Does it Work? </summary>
                    <div className="mt-3">
                        <p className="question__answer">
                            A very interesting question indeed.Do you want it to dramatically change your life forever? Well the final price for something is not always the same. It depends on the person who is willing to pay for it. The final price is determined by the person who is willing to pay for it.
                        </p>
                    </div>
                </details>

                <details className="question">
                    <summary className="question__summary">How Does it Work? </summary>
                    <div className="mt-3">
                        <p className="question__answer">
                            A very interesting question indeed.Do you want it to dramatically change your life forever? Well the final price for something is not always the same. It depends on the person who is willing to pay for it. The final price is determined by the person who is willing to pay for it.
                        </p>
                    </div>
                </details>
            </div>
        </div>
    );
};

export default BlogPage;