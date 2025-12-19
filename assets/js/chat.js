// Chat Progress Management
document.addEventListener('DOMContentLoaded', function () {
    // Progress stages configuration
    const stages = [
        { name: 'مرحلة التعريف', width: 33 },
        { name: 'تأكيد الطلب', width: 66 },
        { name: 'التنفيذ والرد', width: 100 }
    ];

    let currentStage = 0;

    // Get DOM elements
    const progressBar = document.querySelector('.progress-bar-fill');
    const progressSteps = document.querySelectorAll('.progress-step');
    const currentStageLabel = document.querySelector('.progress-labels strong');
    const chatMessages = document.querySelector('.chat-messages');
    const actionBlock = document.querySelector('.chat-action-block');
    const successBadge = document.querySelector('.prim-badge.badge-alt');

    // Hide success badge initially
    if (successBadge) {
        successBadge.style.display = 'none';
    }

    // Function to update progress
    function updateProgress(stageIndex) {
        if (stageIndex >= stages.length) {
            stageIndex = stages.length - 1;
        }

        currentStage = stageIndex;
        const stage = stages[stageIndex];

        // Update progress bar
        if (progressBar) {
            progressBar.style.width = stage.width + '%';
        }

        // Update progress steps
        progressSteps.forEach((step, index) => {
            if (index <= stageIndex) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        // Update current stage label
        if (currentStageLabel) {
            currentStageLabel.textContent = stage.name;
        }
    }

    // Function to show success message
    function showSuccessMessage(stageName) {
        if (successBadge) {
            successBadge.style.display = 'block';
            const badgeText = successBadge.querySelector('svg').nextSibling;
            if (badgeText) {
                badgeText.textContent = ` تم تحديث المرحلة إلى "${stageName}"`;
            }

            // Scroll to success message
            setTimeout(() => {
                successBadge.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    }

    // Function to add system message
    function addSystemMessage(message) {
        const messageHTML = `
            <div class="message incoming system-message">
                <div class="message-avatar">
                    <img src="assets/images/logo-tasear.png" alt="System">
                </div>
                <div class="message-content">
                    <p>${message}</p>
                </div>
                <span class="message-time">الآن</span>
            </div>
        `;

        if (chatMessages) {
            chatMessages.insertAdjacentHTML('beforeend', messageHTML);
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    // Function to create new action block for next stage
    function createActionBlock(stageIndex) {
        let actionHTML = '';

        if (stageIndex === 1) {
            // Stage 2: Confirmation request
            actionHTML = `
                <div class="chat-action-block">
                    <div class="action-content">
                        <div class="d-flex align-items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.388 0.264997C13.4481 0.616867 14.2804 1.45141 15.1165 2.62395C15.9499 3.7926 16.8708 5.42206 18.0578 7.5225L18.1044 7.60496C19.2917 9.7057 20.2125 11.3351 20.7864 12.6565C21.363 13.9843 21.6502 15.1307 21.4211 16.2321C21.1903 17.3411 20.6214 18.3495 19.7928 19.1117C18.9662 19.872 17.8407 20.1928 16.4236 20.3468C15.0145 20.5 13.1712 20.5 10.7988 20.5H10.7013C8.32882 20.5 6.48554 20.5 5.07642 20.3468C3.65927 20.1928 2.53379 19.872 1.70722 19.1117C0.878621 18.3495 0.309681 17.3411 0.0789508 16.2321C-0.150199 15.1307 0.137001 13.9843 0.713651 12.6565C1.28752 11.3351 2.20835 9.7057 3.39558 7.60495L3.44218 7.52249C4.62921 5.42206 5.55008 3.7926 6.38347 2.62395C7.21963 1.45141 8.05194 0.616867 9.112 0.264997C10.1764 -0.0883325 11.3236 -0.0883325 12.388 0.264997ZM9.7894 9.24998H9.75C9.1977 9.24998 8.75 9.6977 8.75 10.25C8.75 10.8023 9.1977 11.25 9.75 11.25V15.25C9.75 15.8023 10.1977 16.25 10.75 16.25C11.3023 16.25 11.75 15.8023 11.75 15.25V11.2106C11.7501 11.0108 11.7503 10.7728 11.7228 10.5682C11.6896 10.3211 11.6007 9.9794 11.3107 9.6894C11.0207 9.3994 10.6789 9.3105 10.4319 9.2773C10.2272 9.2497 9.9893 9.2499 9.7894 9.24998ZM10.7544 5.25C10.1956 5.25 9.7499 5.69772 9.7499 6.25C9.7499 6.80228 10.1956 7.25 10.7454 7.25C11.3042 7.25 11.7499 6.80228 11.7499 6.25C11.7499 5.69772 11.3042 5.25 10.7544 5.25Z" fill="#016B61" />
                            </svg>
                            <h6 class="heading-6 text-color mb-1 fw-normal">تأكيد الانتقال لمرحلة تأكيد الطلب</h6>
                        </div>
                        <p class="text-color fs-14">هل تريد الانتقال إلى مرحلة "تأكيد الطلب"؟ بالموافقة، ستنتقل المحادثة للمرحلة التالية</p>
                        <div class="d-flex align-items-center justify-content-end gap-2 mt-3">
                            <button class="btn-reject text-color main-btn maxed-btn bg-grayed-btn d-flex align-items-center justify-content-center gap-1">
                                إلغاء
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.146447 0.146447C0.341709 -0.0488155 0.658291 -0.0488155 0.853553 0.146447L5.16667 4.45956L9.47978 0.146447C9.67504 -0.0488155 9.99162 -0.0488155 10.1869 0.146447C10.3821 0.341709 10.3821 0.658291 10.1869 0.853553L5.87377 5.16667L10.1869 9.47978C10.3821 9.67504 10.3821 9.99162 10.1869 10.1869C9.99162 10.3821 9.67504 10.3821 9.47978 10.1869L5.16667 5.87377L0.853553 10.1869C0.658291 10.3821 0.341709 10.3821 0.146447 10.1869C-0.0488155 9.99162 -0.0488155 9.67504 0.146447 9.47978L4.45956 5.16667L0.146447 0.853553C-0.0488155 0.658291 -0.0488155 0.341709 0.146447 0.146447Z" fill="#063235" />
                                </svg>
                            </button>
                            <button class="btn-accept main-btn maxed-btn btn-custom-light d-flex align-items-center justify-content-center gap-1">
                                قبول
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                    <path d="M2.83475 8.33334C2.83475 8.33334 2.83008 8.33334 2.82808 8.33334C2.65075 8.33067 2.4881 8.23533 2.40077 8.08133C1.2821 6.124 0.510083 6.01432 0.501417 6.01299C0.501417 6.01299 0.329526 6.05339 0.152393 5.86719C-0.0247404 5.68099 0.0013511 5.46875 0.0013511 5.46875C0.0013511 5.46875 0.0117678 5.27604 0.152393 5.13802C0.293018 5 0.501417 5 0.501417 5C0.69475 5 1.63541 5.1 2.84074 6.89266C3.93208 5.23 6.8834 1.062 9.66073 0.0313353C9.9194 -0.0646647 10.2074 0.0673301 10.3034 0.325997C10.3994 0.584663 10.2674 0.872672 10.0088 0.968672C6.91678 2.11601 3.29876 8.03266 3.2621 8.09266C3.17143 8.242 3.00942 8.33334 2.83475 8.33334Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else if (stageIndex === 2) {
            // Stage 3: Final execution
            actionHTML = `
                <div class="chat-action-block">
                    <div class="action-content">
                        <div class="d-flex align-items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.388 0.264997C13.4481 0.616867 14.2804 1.45141 15.1165 2.62395C15.9499 3.7926 16.8708 5.42206 18.0578 7.5225L18.1044 7.60496C19.2917 9.7057 20.2125 11.3351 20.7864 12.6565C21.363 13.9843 21.6502 15.1307 21.4211 16.2321C21.1903 17.3411 20.6214 18.3495 19.7928 19.1117C18.9662 19.872 17.8407 20.1928 16.4236 20.3468C15.0145 20.5 13.1712 20.5 10.7988 20.5H10.7013C8.32882 20.5 6.48554 20.5 5.07642 20.3468C3.65927 20.1928 2.53379 19.872 1.70722 19.1117C0.878621 18.3495 0.309681 17.3411 0.0789508 16.2321C-0.150199 15.1307 0.137001 13.9843 0.713651 12.6565C1.28752 11.3351 2.20835 9.7057 3.39558 7.60495L3.44218 7.52249C4.62921 5.42206 5.55008 3.7926 6.38347 2.62395C7.21963 1.45141 8.05194 0.616867 9.112 0.264997C10.1764 -0.0883325 11.3236 -0.0883325 12.388 0.264997ZM9.7894 9.24998H9.75C9.1977 9.24998 8.75 9.6977 8.75 10.25C8.75 10.8023 9.1977 11.25 9.75 11.25V15.25C9.75 15.8023 10.1977 16.25 10.75 16.25C11.3023 16.25 11.75 15.8023 11.75 15.25V11.2106C11.7501 11.0108 11.7503 10.7728 11.7228 10.5682C11.6896 10.3211 11.6007 9.9794 11.3107 9.6894C11.0207 9.3994 10.6789 9.3105 10.4319 9.2773C10.2272 9.2497 9.9893 9.2499 9.7894 9.24998ZM10.7544 5.25C10.1956 5.25 9.7499 5.69772 9.7499 6.25C9.7499 6.80228 10.1956 7.25 10.7454 7.25C11.3042 7.25 11.7499 6.80228 11.7499 6.25C11.7499 5.69772 11.3042 5.25 10.7544 5.25Z" fill="#016B61" />
                            </svg>
                            <h6 class="heading-6 text-color mb-1 fw-normal">تأكيد الانتقال لمرحلة التنفيذ والرد</h6>
                        </div>
                        <p class="text-color fs-14">هل تريد الانتقال إلى مرحلة "التنفيذ والرد"؟ بالموافقة، سيتم إكمال الطلب والانتقال للمرحلة النهائية</p>
                        <div class="d-flex align-items-center justify-content-end gap-2 mt-3">
                            <button class="btn-reject text-color main-btn maxed-btn bg-grayed-btn d-flex align-items-center justify-content-center gap-1">
                                إلغاء
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.146447 0.146447C0.341709 -0.0488155 0.658291 -0.0488155 0.853553 0.146447L5.16667 4.45956L9.47978 0.146447C9.67504 -0.0488155 9.99162 -0.0488155 10.1869 0.146447C10.3821 0.341709 10.3821 0.658291 10.1869 0.853553L5.87377 5.16667L10.1869 9.47978C10.3821 9.67504 10.3821 9.99162 10.1869 10.1869C9.99162 10.3821 9.67504 10.3821 9.47978 10.1869L5.16667 5.87377L0.853553 10.1869C0.658291 10.3821 0.341709 10.3821 0.146447 10.1869C-0.0488155 9.99162 -0.0488155 9.67504 0.146447 9.47978L4.45956 5.16667L0.146447 0.853553C-0.0488155 0.658291 -0.0488155 0.341709 0.146447 0.146447Z" fill="#063235" />
                                </svg>
                            </button>
                            <button class="btn-accept main-btn maxed-btn btn-custom-light d-flex align-items-center justify-content-center gap-1">
                                قبول
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                    <path d="M2.83475 8.33334C2.83475 8.33334 2.83008 8.33334 2.82808 8.33334C2.65075 8.33067 2.4881 8.23533 2.40077 8.08133C1.2821 6.124 0.510083 6.01432 0.501417 6.01299C0.501417 6.01299 0.329526 6.05339 0.152393 5.86719C-0.0247404 5.68099 0.0013511 5.46875 0.0013511 5.46875C0.0013511 5.46875 0.0117678 5.27604 0.152393 5.13802C0.293018 5 0.501417 5 0.501417 5C0.69475 5 1.63541 5.1 2.84074 6.89266C3.93208 5.23 6.8834 1.062 9.66073 0.0313353C9.9194 -0.0646647 10.2074 0.0673301 10.3034 0.325997C10.3994 0.584663 10.2674 0.872672 10.0088 0.968672C6.91678 2.11601 3.29876 8.03266 3.2621 8.09266C3.17143 8.242 3.00942 8.33334 2.83475 8.33334Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        if (actionHTML && chatMessages) {
            chatMessages.insertAdjacentHTML('beforeend', actionHTML);
            attachButtonHandlers();
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    // Function to handle accept button click
    function handleAccept() {
        const nextStage = currentStage + 1;

        if (nextStage < stages.length) {
            // Hide current action block
            if (actionBlock) {
                actionBlock.style.display = 'none';
            }

            // Update progress
            updateProgress(nextStage);

            // Show success message
            showSuccessMessage(stages[nextStage].name);

            // Add system message
            addSystemMessage(`تم الانتقال إلى ${stages[nextStage].name} بنجاح`);

            // Create next action block if not at final stage
            if (nextStage < stages.length - 1) {
                setTimeout(() => {
                    createActionBlock(nextStage);
                }, 1000);
            } else {
                // Final stage - show completion message
                setTimeout(() => {
                    addSystemMessage('تم إكمال جميع المراحل بنجاح! يمكنك الآن متابعة المحادثة.');
                }, 1000);
            }
        }
    }

    // Function to handle reject button click
    function handleReject() {
        addSystemMessage('تم رفض الانتقال للمرحلة التالية');
        if (actionBlock) {
            actionBlock.style.display = 'none';
        }
    }

    // Attach event handlers to buttons
    function attachButtonHandlers() {
        const acceptButtons = document.querySelectorAll('.btn-accept');
        const rejectButtons = document.querySelectorAll('.btn-reject');

        acceptButtons.forEach(btn => {
            // Remove old listeners by cloning
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);

            newBtn.addEventListener('click', handleAccept);
        });

        rejectButtons.forEach(btn => {
            // Remove old listeners by cloning
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);

            newBtn.addEventListener('click', handleReject);
        });
    }

    // Initialize button handlers
    attachButtonHandlers();

    // Message sending functionality
    const sendButton = document.querySelector('.btn-send');
    const messageInput = document.querySelector('.chat-input input[type="text"]');

    if (sendButton && messageInput) {
        sendButton.addEventListener('click', function () {
            const message = messageInput.value.trim();
            if (message) {
                sendMessage(message);
                messageInput.value = '';
            }
        });

        messageInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                const message = messageInput.value.trim();
                if (message) {
                    sendMessage(message);
                    messageInput.value = '';
                }
            }
        });
    }

    function sendMessage(text) {
        const messageHTML = `
            <div class="message outgoing">
                <div class="message-avatar">
                    <img src="assets/images/logo-tasear.png" alt="Me">
                </div>
                <div class="message-content">
                    <p>${text}</p>
                </div>
                <span class="message-time">الآن</span>
            </div>
        `;

        if (chatMessages) {
            chatMessages.insertAdjacentHTML('beforeend', messageHTML);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }
});
