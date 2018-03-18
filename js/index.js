$(function () {
    const sound = new Audio('audio/endTimer.mp3');

    const defaultTimer = {
        pomodoro: { get min() { return 25 }, get s() { return 0 } },
        shortBreak: { get min() { return 3 }, get s() { return 0 } },
        longBreak: { get min() { return 15 }, get s() { return 0 } },
    };

    const time = {
        pomodoro: {
            min: defaultTimer.pomodoro.min, s: defaultTimer.pomodoro.s,
            get percent() {
                return (1 - (time.pomodoro.min * 60 + time.pomodoro.s) / (defaultTimer.pomodoro.min * 60 + defaultTimer.pomodoro.s)) * 100;
            }
        },
        shortBreak: {
            min: defaultTimer.shortBreak.min, s: defaultTimer.shortBreak.s,
            get percent() {
                return (1 - (time.shortBreak.min * 60 + time.shortBreak.s) / (defaultTimer.shortBreak.min * 60 + defaultTimer.shortBreak.s)) * 100;
            }
        },
        longBreak: {
            min: defaultTimer.longBreak.min, s: defaultTimer.longBreak.s,
            get percent() {
                return (1 - (time.longBreak.min * 60 + time.longBreak.s) / (defaultTimer.longBreak.min * 60 + defaultTimer.longBreak.s)) * 100;
            }
        },
    };

    let clock = null;
    let isRunning = false;
    const formater = function (timer) {
        var formated = '';
        if (timer.min.toString().length < 2) {
            formated += '0' + timer.min;
        } else {
            formated += timer.min
        }
        formated += ':';
        if (timer.s.toString().length < 2) {
            formated += '0' + timer.s;
        } else {
            formated += timer.s;
        }
        return formated;
    }
    const runTimer = function ($btn, timer, type, callback) {
        if (isRunning) {
            clearInterval(clock);
            $btn.text('Start ' + type);
            isRunning = false;
            return;
        }
        $btn.text('Pause ' + type);
        isRunning = true;
        if (typeof callback == 'function') {
            callback(timer);
        }
        clock = setInterval(function () {
            if (timer.min == 0 && timer.s == 0) {
                clearInterval(clock);
                $btn.text('Start ' + type);
                isRunning = false;
                sound.play();
                return;
            }
            timer.s = timer.s - 1;
            if (timer.s < 0) {
                timer.s += 60;
                timer.min--;
            }
            if (typeof callback == 'function') {
                callback(timer);
            }
        }, 1000);
    }

    function Pomodoro($container) {
        let $pomodoroChart = $container.find('.min-chart#chart-sales');
        let updateTimer = function (timer) {
            $pomodoroChart.data('percent', timer.percent);
            $pomodoroChart.find('.percent').text(formater(timer));
            $pomodoroChart.data('easyPieChart').update(timer.percent);
        };
        $container.find('button[data-time]').on('click', function () {
            var $btn = $(this);
            $container.find('button[data-time]').prop('disabled', !isRunning);
            $btn.prop('disabled', false);
            runTimer($btn, time[$btn.data('time')], $btn.data('text'), updateTimer);
        });

        $container.find('[name="stop-timer"]').on('click.pomodoro', function () {
            clearInterval(clock);
            time.pomodoro.min = defaultTimer.pomodoro.min;
            time.pomodoro.s = defaultTimer.pomodoro.s;

            time.shortBreak.min = defaultTimer.shortBreak.min;
            time.shortBreak.s = defaultTimer.shortBreak.s;

            time.longBreak.min = defaultTimer.longBreak.min;
            time.longBreak.s = defaultTimer.longBreak.s;

            isRunning = false;

            $container.find('[name="start-pomodoro"]').text('Start Pomodoro');
            $container.find('[name="start-short-break"]').text('Start short break');
            $container.find('[name="star-long-break"]').text('Start long break');
            $container.find('button[data-time]').prop('disabled', false);
            
            updateTimer(time.pomodoro);
        });
        $pomodoroChart.easyPieChart({
            barColor: "#4caf50",
            animated: false,
            size: 200,
            lineWidth: 15,
            scaleLength: 0
        });
        updateTimer(time.pomodoro);
    }

    Pomodoro($('#pomodoro-container'));
});