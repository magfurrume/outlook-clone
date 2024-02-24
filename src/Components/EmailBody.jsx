import React from 'react';

export default function EmailBody({ selectedEmail }) {
    return (
        <>
            {selectedEmail ? (
                <>
                    <section className="d-flex align-items-center justify-content-between rounded-1 border bg-white shadow-md p-3">
                        <div className="d-flex align-items-center gap-2">
                            <p className="font-weight-bold">{selectedEmail?.subject}</p>
                        </div>
                    </section>

                    <div className='email-body pt-3'>
                        <section className="d-flex align-items-center rounded-1 border bg-white shadow-md p-3">
                            <div className="d-flex align-items-center gap-2">
                                <p className="font-weight-bold">{selectedEmail?.body}</p>
                            </div>
                        </section>
                    </div>
                </>
            ) : (
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
                    <img src="https://res.cdn.office.net/owamail/hashed-v1/resources/images/illustration_mail-hash-c4bc6831.m.svg" alt="No Email Image" style={{ width: '100px', height: '100px' }} />
                    <p className="text-muted mt-3"><b>Select an item to read</b>.</p>
                    <p className="text-muted">Nothing is selected</p>
                </div>
            )}
        </>
    );
}
