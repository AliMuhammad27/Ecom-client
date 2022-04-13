import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getFeedBackById } from "../../redux/actions/feedbacks";
const FeedBackDetails = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeedBackById(match.params.id));
  }, [match.params.id]);

  const feedback = useSelector((state) => state?.feedbacks?.feedback);
  // console.log("FeedbackInfo", feedbackInfo);
  // const { feedback } = feedbackInfo;
  // console.log("feedback", feedback)
  // let feedback = {};

  return (
    <div>
      <div className="app-content dashboard content">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration" className="user-page">
              <div className="row">
                <div className="col-12">
                  <div className="card rounded">
                    <div className="card-body p-md-2 p-lg-3 p-xl-4">
                      <div className="page-title">
                        <div className="row">
                          <div className="col-12">
                            <h1>Feedback</h1>
                          </div>
                          <div className="col-12">
                            <h3>Feedback Information </h3>
                          </div>
                        </div>
                      </div>
                      <div className="user-block">
                        <div className="row detail-row">
                          <div className="col-12 lablename">
                            <label>First Name</label>
                          </div>
                          <div className="col-12">{feedback?.firstname}</div>
                        </div>
                        <div className="row detail-row">
                          <div className="col-12 lablename">
                            <label>Last Name</label>
                          </div>
                          <div className="col-12">{feedback?.lastname}</div>
                        </div>
                        <div className="row detail-row">
                          <div className="col-12 lablename">
                            <label htmlFor>Email</label>
                          </div>
                          <div className="col-12">{feedback?.email}</div>
                        </div>
                        <div className="row detail-row">
                          <div className="col-12 lablename">
                            <label htmlFor>Subject</label>
                          </div>
                          <div className="col-12">Abc</div>
                        </div>
                        <div className="row detail-row">
                          <div className="col-12 lablename">
                            <label htmlFor>Date</label>
                          </div>
                          <div className="col-12">
                            {moment(feedback?.createdAt).format("ll")}
                          </div>
                        </div>
                        <div className="row detail-row">
                          <div className="col-12 lablename">
                            <label htmlFor>Message</label>
                          </div>
                          <div className="col-12 col-md-5">
                            <p>{feedback?.message}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackDetails;
