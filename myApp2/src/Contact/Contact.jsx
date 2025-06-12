function Contact() {
  return (
    <>
      <div className="container py-5 ">
        <h5 className="title-left mb-5 text-center">Send Message Us</h5>
        <form>
          <div className="row g-3">
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required=""
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required=""
                ></textarea>
              </div>
            </div>

            <div className="col-md-12 text-center mt-5">
              <button
                type="submit"
                className="btn btn-primary rounded-pill fs-2"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
