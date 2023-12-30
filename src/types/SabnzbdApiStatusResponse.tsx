export type SabnzbdApiStatusResponse = {
    status: Status;
}

export type Status = {
    uptime:              string;
    color_scheme:        string;
    confighelpuri:       string;
    pid:                 number;
    active_lang:         string;
    rtl:                 boolean;
    my_lcldata:          string;
    my_home:             string;
    webdir:              string;
    url_base:            string;
    windows:             boolean;
    macos:               boolean;
    power_options:       boolean;
    pp_pause_event:      boolean;
    apikey:              string;
    new_release:         null;
    new_rel_url:         null;
    version:             string;
    paused:              boolean;
    pause_int:           string;
    paused_all:          boolean;
    diskspace1:          string;
    diskspace2:          string;
    diskspace1_norm:     string;
    diskspace2_norm:     string;
    diskspacetotal1:     string;
    diskspacetotal2:     string;
    speedlimit:          string;
    speedlimit_abs:      string;
    have_warnings:       string;
    finishaction:        null;
    quota:               string;
    have_quota:          boolean;
    left_quota:          string;
    cache_art:           string;
    cache_size:          string;
    logfile:             string;
    weblogfile:          null;
    loglevel:            string;
    folders:             string[];
    configfn:            string;
    warnings:            Warning[];
    delayed_assembler:   number;
    loadavg:             string;
    pystone:             number;
    downloaddir:         string;
    downloaddirspeed:    number;
    completedir:         string;
    completedirspeed:    number;
    internetbandwidth:   number;
    active_socks5_proxy: null;
    localipv4:           string;
    publicipv4:          string;
    ipv6:                null;
    dnslookup:           boolean;
    servers:             Server[];
}

export type Server = {
    servername:        string;
    serveractiveconn:  number;
    servertotalconn:   number;
    serverconnections: any[];
    serverssl:         number;
    serversslinfo:     string;
    serveractive:      boolean;
    servererror:       string;
    serverpriority:    number;
    serveroptional:    number;
    serverbps:         string;
}

export type Warning = {
    type:   string;
    text:   string;
    time:   number;
    origin: string;
}
