var searchIndex = JSON.parse('{\
"mio":{"doc":"Mio is a fast, low-level I/O library for Rust focusing on…","i":[[3,"Interest","mio","Interest used in registering.",null,null],[3,"Poll","","Polls for readiness events on all registered values.",null,null],[3,"Registry","","Registers I/O resources.",null,null],[3,"Token","","Associates readiness events with `event::Source`s.",null,null],[12,"0","","",0,null],[3,"Waker","","Waker allows cross-thread waking of `Poll`.",null,null],[18,"READABLE","","Returns a `Interest` set representing readable interests.",1,null],[18,"WRITABLE","","Returns a `Interest` set representing writable interests.",1,null],[11,"add","","Add together two `Interest`.",1,[[["interest",3]],["interest",3]]],[11,"remove","","Removes `other` `Interest` from `self`.",1,[[["interest",3]],[["option",4],["interest",3]]]],[11,"is_readable","","Returns true if the value includes readable readiness.",1,[[]]],[11,"is_writable","","Returns true if the value includes writable readiness.",1,[[]]],[11,"is_aio","","Returns true if `Interest` contains AIO readiness",1,[[]]],[11,"is_lio","","Returns true if `Interest` contains LIO readiness",1,[[]]],[11,"registry","","Create a separate `Registry` which can be used to register…",2,[[],["registry",3]]],[11,"poll","","Wait for readiness events",2,[[["events",3],["duration",3],["option",4]],["result",6]]],[11,"new","","Return a new `Poll` handle.",2,[[],[["result",6],["poll",3]]]],[11,"register","","Register an `event::Source` with the `Poll` instance.",3,[[["interest",3],["token",3]],["result",6]]],[11,"reregister","","Re-register an [`event::Source`] with the `Poll` instance.",3,[[["interest",3],["token",3]],["result",6]]],[11,"deregister","","Deregister an [`event::Source`] with the `Poll` instance.",3,[[],["result",6]]],[11,"try_clone","","Creates a new independently owned `Registry`.",3,[[],[["result",6],["registry",3]]]],[11,"new","","Create a new `Waker`.",4,[[["token",3],["registry",3]],[["result",6],["waker",3]]]],[11,"wake","","Wake up the `Poll` associated with this `Waker`.",4,[[],["result",6]]],[0,"event","","Readiness event types and utilities.",null,null],[3,"Event","mio::event","A readiness event.",null,null],[3,"Events","","A collection of readiness events.",null,null],[3,"Iter","","`Events` iterator.",null,null],[11,"token","","Returns the event\'s token.",5,[[],["token",3]]],[11,"is_readable","","Returns true if the event contains readable readiness.",5,[[]]],[11,"is_writable","","Returns true if the event contains writable readiness.",5,[[]]],[11,"is_error","","Returns true if the event contains error readiness.",5,[[]]],[11,"is_read_closed","","Returns true if the event contains read closed readiness.",5,[[]]],[11,"is_write_closed","","Returns true if the event contains write closed readiness.",5,[[]]],[11,"is_priority","","Returns true if the event contains priority readiness.",5,[[]]],[11,"is_aio","","Returns true if the event contains AIO readiness.",5,[[]]],[11,"is_lio","","Returns true if the event contains LIO readiness.",5,[[]]],[11,"with_capacity","","Return a new `Events` capable of holding up to `capacity`…",6,[[],["events",3]]],[11,"capacity","","Returns the number of `Event` values that `self` can hold.",6,[[]]],[11,"is_empty","","Returns `true` if `self` contains no `Event` values.",6,[[]]],[11,"iter","","Returns an iterator over the `Event` values.",6,[[],["iter",3]]],[11,"clear","","Clearing all `Event` values from container explicitly.",6,[[]]],[8,"Source","","An event source that may be registered with `Registry`.",null,null],[10,"register","","Register `self` with the given `Registry` instance.",7,[[["token",3],["interest",3],["registry",3]],["result",6]]],[10,"reregister","","Re-register `self` with the given `Registry` instance.",7,[[["token",3],["interest",3],["registry",3]],["result",6]]],[10,"deregister","","Deregister `self` from the given `Registry` instance.",7,[[["registry",3]],["result",6]]],[0,"net","mio","Networking primitives.",null,null],[3,"TcpListener","mio::net","A structure representing a socket server",null,null],[3,"TcpSocket","","A non-blocking TCP socket used to configure a stream or…",null,null],[3,"TcpStream","","A non-blocking TCP stream between a local socket and a…",null,null],[3,"TcpKeepalive","","Configures a socket\'s TCP keepalive parameters.",null,null],[3,"UdpSocket","","A User Datagram Protocol socket.",null,null],[3,"SocketAddr","","An address associated with a `mio` specific Unix socket.",null,null],[3,"UnixDatagram","","A Unix datagram socket.",null,null],[3,"UnixListener","","A non-blocking Unix domain socket server.",null,null],[3,"UnixStream","","A non-blocking Unix stream socket.",null,null],[11,"bind","","Convenience method to bind a new TCP listener to the…",8,[[["socketaddr",4]],[["tcplistener",3],["result",6]]]],[11,"from_std","","Creates a new `TcpListener` from a standard…",8,[[["tcplistener",3]],["tcplistener",3]]],[11,"accept","","Accepts a new `TcpStream`.",8,[[],["result",6]]],[11,"local_addr","","Returns the local socket address of this listener.",8,[[],[["result",6],["socketaddr",4]]]],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",8,[[],["result",6]]],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",8,[[],["result",6]]],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",8,[[],[["result",6],["option",4]]]],[11,"new_v4","","Create a new IPv4 TCP socket.",9,[[],[["result",6],["tcpsocket",3]]]],[11,"new_v6","","Create a new IPv6 TCP socket.",9,[[],[["result",6],["tcpsocket",3]]]],[11,"bind","","Bind `addr` to the TCP socket.",9,[[["socketaddr",4]],["result",6]]],[11,"connect","","Connect the socket to `addr`.",9,[[["socketaddr",4]],[["result",6],["tcpstream",3]]]],[11,"listen","","Listen for inbound connections, converting the socket to a…",9,[[],[["tcplistener",3],["result",6]]]],[11,"set_reuseaddr","","Sets the value of `SO_REUSEADDR` on this socket.",9,[[],["result",6]]],[11,"get_reuseaddr","","Get the value of `SO_REUSEADDR` set on this socket.",9,[[],["result",6]]],[11,"set_reuseport","","Sets the value of `SO_REUSEPORT` on this socket. Only…",9,[[],["result",6]]],[11,"get_reuseport","","Get the value of `SO_REUSEPORT` set on this socket. Only…",9,[[],["result",6]]],[11,"set_linger","","Sets the value of `SO_LINGER` on this socket.",9,[[["duration",3],["option",4]],["result",6]]],[11,"get_linger","","Gets the value of `SO_LINGER` on this socket",9,[[],[["result",6],["option",4]]]],[11,"set_recv_buffer_size","","Sets the value of `SO_RCVBUF` on this socket.",9,[[],["result",6]]],[11,"get_recv_buffer_size","","Get the value of `SO_RCVBUF` set on this socket.",9,[[],["result",6]]],[11,"set_send_buffer_size","","Sets the value of `SO_SNDBUF` on this socket.",9,[[],["result",6]]],[11,"get_send_buffer_size","","Get the value of `SO_SNDBUF` set on this socket.",9,[[],["result",6]]],[11,"set_keepalive","","Sets whether keepalive messages are enabled to be sent on…",9,[[],["result",6]]],[11,"get_keepalive","","Returns whether or not TCP keepalive probes will be sent…",9,[[],["result",6]]],[11,"set_keepalive_params","","Sets parameters configuring TCP keepalive probes for this…",9,[[["tcpkeepalive",3]],["result",6]]],[11,"get_keepalive_time","","Returns the amount of time after which TCP keepalive…",9,[[],[["result",6],["option",4]]]],[11,"get_keepalive_interval","","Returns the time interval between TCP keepalive probes, if…",9,[[],[["result",6],["option",4]]]],[11,"get_keepalive_retries","","Returns the maximum number of TCP keepalive probes that…",9,[[],[["option",4],["result",6]]]],[11,"get_localaddr","","Returns the local address of this socket",9,[[],[["result",6],["socketaddr",4]]]],[11,"with_time","","on idle connections.",10,[[["duration",3]]]],[11,"with_interval","","Sets the time interval between TCP keepalive probes. This…",10,[[["duration",3]]]],[11,"with_retries","","Sets the maximum number of TCP keepalive probes that will…",10,[[]]],[11,"new","","Returns a new, empty set of TCP keepalive parameters.",10,[[]]],[11,"connect","","Create a new TCP stream and issue a non-blocking connect…",11,[[["socketaddr",4]],[["result",6],["tcpstream",3]]]],[11,"from_std","","Creates a new `TcpStream` from a standard `net::TcpStream`.",11,[[["tcpstream",3]],["tcpstream",3]]],[11,"peer_addr","","Returns the socket address of the remote peer of this TCP…",11,[[],[["result",6],["socketaddr",4]]]],[11,"local_addr","","Returns the socket address of the local half of this TCP…",11,[[],[["result",6],["socketaddr",4]]]],[11,"shutdown","","Shuts down the read, write, or both halves of this…",11,[[["shutdown",4]],["result",6]]],[11,"set_nodelay","","Sets the value of the `TCP_NODELAY` option on this socket.",11,[[],["result",6]]],[11,"nodelay","","Gets the value of the `TCP_NODELAY` option on this socket.",11,[[],["result",6]]],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",11,[[],["result",6]]],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",11,[[],["result",6]]],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",11,[[],[["result",6],["option",4]]]],[11,"peek","","Receives data on the socket from the remote address to…",11,[[],["result",6]]],[11,"bind","","Creates a UDP socket from the given address.",12,[[["socketaddr",4]],[["udpsocket",3],["result",6]]]],[11,"from_std","","Creates a new `UdpSocket` from a standard `net::UdpSocket`.",12,[[["udpsocket",3]],["udpsocket",3]]],[11,"local_addr","","Returns the socket address that this socket was created…",12,[[],[["result",6],["socketaddr",4]]]],[11,"peer_addr","","Returns the socket address of the remote peer this socket…",12,[[],[["result",6],["socketaddr",4]]]],[11,"send_to","","Sends data on the socket to the given address. On success,…",12,[[["socketaddr",4]],["result",6]]],[11,"recv_from","","Receives data from the socket. On success, returns the…",12,[[],["result",6]]],[11,"peek_from","","Receives data from the socket, without removing it from…",12,[[],["result",6]]],[11,"send","","Sends data on the socket to the address previously bound…",12,[[],["result",6]]],[11,"recv","","Receives data from the socket previously bound with…",12,[[],["result",6]]],[11,"peek","","Receives data from the socket, without removing it from…",12,[[],["result",6]]],[11,"connect","","Connects the UDP socket setting the default destination…",12,[[["socketaddr",4]],["result",6]]],[11,"set_broadcast","","Sets the value of the `SO_BROADCAST` option for this socket.",12,[[],["result",6]]],[11,"broadcast","","Gets the value of the `SO_BROADCAST` option for this socket.",12,[[],["result",6]]],[11,"set_multicast_loop_v4","","Sets the value of the `IP_MULTICAST_LOOP` option for this…",12,[[],["result",6]]],[11,"multicast_loop_v4","","Gets the value of the `IP_MULTICAST_LOOP` option for this…",12,[[],["result",6]]],[11,"set_multicast_ttl_v4","","Sets the value of the `IP_MULTICAST_TTL` option for this…",12,[[],["result",6]]],[11,"multicast_ttl_v4","","Gets the value of the `IP_MULTICAST_TTL` option for this…",12,[[],["result",6]]],[11,"set_multicast_loop_v6","","Sets the value of the `IPV6_MULTICAST_LOOP` option for…",12,[[],["result",6]]],[11,"multicast_loop_v6","","Gets the value of the `IPV6_MULTICAST_LOOP` option for…",12,[[],["result",6]]],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",12,[[],["result",6]]],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",12,[[],["result",6]]],[11,"join_multicast_v4","","Executes an operation of the `IP_ADD_MEMBERSHIP` type.",12,[[["ipv4addr",3]],["result",6]]],[11,"join_multicast_v6","","Executes an operation of the `IPV6_ADD_MEMBERSHIP` type.",12,[[["ipv6addr",3]],["result",6]]],[11,"leave_multicast_v4","","Executes an operation of the `IP_DROP_MEMBERSHIP` type.",12,[[["ipv4addr",3]],["result",6]]],[11,"leave_multicast_v6","","Executes an operation of the `IPV6_DROP_MEMBERSHIP` type.",12,[[["ipv6addr",3]],["result",6]]],[11,"only_v6","","Get the value of the `IPV6_V6ONLY` option on this socket.",12,[[],["result",6]]],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",12,[[],[["result",6],["option",4]]]],[11,"bind","","Creates a Unix datagram socket bound to the given path.",13,[[["asref",8],["path",3]],[["result",6],["unixdatagram",3]]]],[11,"from_std","","Creates a new `UnixDatagram` from a standard…",13,[[["unixdatagram",3]],["unixdatagram",3]]],[11,"connect","","Connects the socket to the specified address.",13,[[["asref",8],["path",3]],["result",6]]],[11,"unbound","","Creates a Unix Datagram socket which is not bound to any…",13,[[],[["result",6],["unixdatagram",3]]]],[11,"pair","","Create an unnamed pair of connected sockets.",13,[[],["result",6]]],[11,"local_addr","","Returns the address of this socket.",13,[[],[["socketaddr",3],["result",6]]]],[11,"peer_addr","","Returns the address of this socket\'s peer.",13,[[],[["socketaddr",3],["result",6]]]],[11,"recv_from","","Receives data from the socket.",13,[[],["result",6]]],[11,"recv","","Receives data from the socket.",13,[[],["result",6]]],[11,"send_to","","Sends data on the socket to the specified address.",13,[[["asref",8],["path",3]],["result",6]]],[11,"send","","Sends data on the socket to the socket\'s peer.",13,[[],["result",6]]],[11,"take_error","","Returns the value of the `SO_ERROR` option.",13,[[],[["result",6],["option",4]]]],[11,"shutdown","","Shut down the read, write, or both halves of this…",13,[[["shutdown",4]],["result",6]]],[11,"bind","","Creates a new `UnixListener` bound to the specified socket.",14,[[["asref",8],["path",3]],[["unixlistener",3],["result",6]]]],[11,"from_std","","Creates a new `UnixListener` from a standard…",14,[[["unixlistener",3]],["unixlistener",3]]],[11,"accept","","Accepts a new incoming connection to this listener.",14,[[],["result",6]]],[11,"local_addr","","Returns the local socket address of this listener.",14,[[],[["socketaddr",3],["result",6]]]],[11,"take_error","","Returns the value of the `SO_ERROR` option.",14,[[],[["result",6],["option",4]]]],[11,"connect","","Connects to the socket named by `path`.",15,[[["asref",8],["path",3]],[["unixstream",3],["result",6]]]],[11,"from_std","","Creates a new `UnixStream` from a standard…",15,[[["unixstream",3]],["unixstream",3]]],[11,"pair","","Creates an unnamed pair of connected sockets.",15,[[],["result",6]]],[11,"local_addr","","Returns the socket address of the local half of this…",15,[[],[["socketaddr",3],["result",6]]]],[11,"peer_addr","","Returns the socket address of the remote half of this…",15,[[],[["socketaddr",3],["result",6]]]],[11,"take_error","","Returns the value of the `SO_ERROR` option.",15,[[],[["result",6],["option",4]]]],[11,"shutdown","","Shuts down the read, write, or both halves of this…",15,[[["shutdown",4]],["result",6]]],[0,"unix","mio","Unix only extensions.",null,null],[3,"SourceFd","mio::unix","Adapter for [`RawFd`] providing an `event::Source`…",null,null],[12,"0","","",16,null],[0,"pipe","","Unix pipe.",null,null],[3,"Receiver","mio::unix::pipe","Receiving end of an Unix pipe.",null,null],[3,"Sender","","Sending end of an Unix pipe.",null,null],[5,"new","","Create a new non-blocking Unix pipe.",null,[[],["result",6]]],[0,"features","mio","Mio\'s optional features.This document describes the…",null,null],[0,"guide","","Getting started guide.In this guide we\'ll do the following:",null,null],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","mio::unix","",16,[[]]],[11,"into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","mio::net","",17,[[]]],[11,"into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","mio::unix::pipe","",18,[[]]],[11,"into","","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"from","mio::event","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",20,[[]]],[11,"into","","",20,[[]]],[11,"into_iter","","",20,[[]]],[11,"to_owned","","",20,[[]]],[11,"clone_into","","",20,[[]]],[11,"borrow","","",20,[[]]],[11,"borrow_mut","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"from","mio::net","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"register","mio::unix","",16,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"reregister","","",16,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"deregister","","",16,[[["registry",3]],["result",6]]],[11,"register","mio::unix::pipe","",18,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"reregister","","",18,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"deregister","","",18,[[["registry",3]],["result",6]]],[11,"register","","",19,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"reregister","","",19,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"deregister","","",19,[[["registry",3]],["result",6]]],[11,"register","mio::net","",8,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"reregister","","",8,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"deregister","","",8,[[["registry",3]],["result",6]]],[11,"register","","",11,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"reregister","","",11,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"deregister","","",11,[[["registry",3]],["result",6]]],[11,"register","","",12,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"reregister","","",12,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"deregister","","",12,[[["registry",3]],["result",6]]],[11,"register","","",13,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"reregister","","",13,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"deregister","","",13,[[["registry",3]],["result",6]]],[11,"register","","",14,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"reregister","","",14,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"deregister","","",14,[[["registry",3]],["result",6]]],[11,"register","","",15,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"reregister","","",15,[[["token",3],["interest",3],["registry",3]],["result",6]]],[11,"deregister","","",15,[[["registry",3]],["result",6]]],[11,"drop","","",9,[[]]],[11,"from","mio::unix::pipe","",18,[[["childstdin",3]],["sender",3]]],[11,"from","","",19,[[["childstdout",3]],["receiver",3]]],[11,"from","","",19,[[["childstderr",3]],["receiver",3]]],[11,"next","mio::event","",20,[[],["option",4]]],[11,"size_hint","","",20,[[]]],[11,"count","","",20,[[]]],[11,"clone","mio","",1,[[],["interest",3]]],[11,"clone","","",0,[[],["token",3]]],[11,"clone","mio::event","",5,[[],["event",3]]],[11,"clone","","",20,[[],["iter",3]]],[11,"clone","mio::net","",10,[[],["tcpkeepalive",3]]],[11,"default","","",10,[[],["tcpkeepalive",3]]],[11,"cmp","mio","",1,[[["interest",3]],["ordering",4]]],[11,"cmp","","",0,[[["token",3]],["ordering",4]]],[11,"eq","","",1,[[["interest",3]]]],[11,"ne","","",1,[[["interest",3]]]],[11,"eq","","",0,[[["token",3]]]],[11,"ne","","",0,[[["token",3]]]],[11,"partial_cmp","","",1,[[["interest",3]],[["ordering",4],["option",4]]]],[11,"lt","","",1,[[["interest",3]]]],[11,"le","","",1,[[["interest",3]]]],[11,"gt","","",1,[[["interest",3]]]],[11,"ge","","",1,[[["interest",3]]]],[11,"partial_cmp","","",0,[[["token",3]],[["ordering",4],["option",4]]]],[11,"lt","","",0,[[["token",3]]]],[11,"le","","",0,[[["token",3]]]],[11,"gt","","",0,[[["token",3]]]],[11,"ge","","",0,[[["token",3]]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","mio::unix","",16,[[["formatter",3]],["result",6]]],[11,"fmt","mio::net","",17,[[["formatter",3]],["result",6]]],[11,"fmt","mio::unix::pipe","",18,[[["formatter",3]],["result",6]]],[11,"fmt","","",19,[[["formatter",3]],["result",6]]],[11,"fmt","mio","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","mio::event","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",20,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","mio::net","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"bitor","mio","",1,[[]]],[11,"bitor_assign","","",1,[[]]],[11,"hash","","",0,[[]]],[11,"read","mio::unix::pipe","",19,[[],["result",6]]],[11,"read_vectored","","",19,[[],["result",6]]],[11,"read","mio::net","",11,[[],["result",6]]],[11,"read_vectored","","",11,[[],["result",6]]],[11,"read","","",15,[[],["result",6]]],[11,"read_vectored","","",15,[[],["result",6]]],[11,"write","mio::unix::pipe","",18,[[],["result",6]]],[11,"write_vectored","","",18,[[],["result",6]]],[11,"flush","","",18,[[],["result",6]]],[11,"write","mio::net","",11,[[],["result",6]]],[11,"write_vectored","","",11,[[],["result",6]]],[11,"flush","","",11,[[],["result",6]]],[11,"write","","",15,[[],["result",6]]],[11,"write_vectored","","",15,[[],["result",6]]],[11,"flush","","",15,[[],["result",6]]],[11,"as_raw_fd","mio","",2,[[],["rawfd",6]]],[11,"as_raw_fd","","",3,[[],["rawfd",6]]],[11,"as_raw_fd","mio::unix::pipe","",18,[[],["rawfd",6]]],[11,"as_raw_fd","","",19,[[],["rawfd",6]]],[11,"as_raw_fd","mio::net","",8,[[],["rawfd",6]]],[11,"as_raw_fd","","",9,[[],["rawfd",6]]],[11,"as_raw_fd","","",11,[[],["rawfd",6]]],[11,"as_raw_fd","","",12,[[],["rawfd",6]]],[11,"as_raw_fd","","",13,[[],["rawfd",6]]],[11,"as_raw_fd","","",14,[[],["rawfd",6]]],[11,"as_raw_fd","","",15,[[],["rawfd",6]]],[11,"from_raw_fd","mio::unix::pipe","",18,[[["rawfd",6]],["sender",3]]],[11,"from_raw_fd","","",19,[[["rawfd",6]],["receiver",3]]],[11,"from_raw_fd","mio::net","Converts a `RawFd` to a `TcpListener`.",8,[[["rawfd",6]],["tcplistener",3]]],[11,"from_raw_fd","","Converts a `RawFd` to a `TcpSocket`.",9,[[["rawfd",6]],["tcpsocket",3]]],[11,"from_raw_fd","","Converts a `RawFd` to a `TcpStream`.",11,[[["rawfd",6]],["tcpstream",3]]],[11,"from_raw_fd","","Converts a `RawFd` to a `UdpSocket`.",12,[[["rawfd",6]],["udpsocket",3]]],[11,"from_raw_fd","","Converts a `RawFd` to a `UnixDatagram`.",13,[[["rawfd",6]],["unixdatagram",3]]],[11,"from_raw_fd","","Converts a `RawFd` to a `UnixListener`.",14,[[["rawfd",6]],["unixlistener",3]]],[11,"from_raw_fd","","Converts a `RawFd` to a `UnixStream`.",15,[[["rawfd",6]],["unixstream",3]]],[11,"into_raw_fd","mio::unix::pipe","",18,[[],["rawfd",6]]],[11,"into_raw_fd","","",19,[[],["rawfd",6]]],[11,"into_raw_fd","mio::net","",8,[[],["rawfd",6]]],[11,"into_raw_fd","","",9,[[],["rawfd",6]]],[11,"into_raw_fd","","",11,[[],["rawfd",6]]],[11,"into_raw_fd","","",12,[[],["rawfd",6]]],[11,"into_raw_fd","","",13,[[],["rawfd",6]]],[11,"into_raw_fd","","",14,[[],["rawfd",6]]],[11,"into_raw_fd","","",15,[[],["rawfd",6]]],[11,"is_unnamed","","Returns `true` if the address is unnamed.",17,[[]]],[11,"as_pathname","","Returns the contents of this address if it is a `pathname`…",17,[[],[["path",3],["option",4]]]],[11,"set_nonblocking","mio::unix::pipe","Set the `Sender` into or out of non-blocking mode.",18,[[],["result",6]]],[11,"set_nonblocking","","Set the `Receiver` into or out of non-blocking mode.",19,[[],["result",6]]]],"p":[[3,"Token"],[3,"Interest"],[3,"Poll"],[3,"Registry"],[3,"Waker"],[3,"Event"],[3,"Events"],[8,"Source"],[3,"TcpListener"],[3,"TcpSocket"],[3,"TcpKeepalive"],[3,"TcpStream"],[3,"UdpSocket"],[3,"UnixDatagram"],[3,"UnixListener"],[3,"UnixStream"],[3,"SourceFd"],[3,"SocketAddr"],[3,"Sender"],[3,"Receiver"],[3,"Iter"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);