// Code generated by protoc-gen-go. DO NOT EDIT.
// source: pond.proto

package pond

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

// a Timestamp is a point in time independent of any timezone or calendar
type Timestamp struct {
	// Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
	Seconds int64 `protobuf:"varint,1,opt,name=seconds,proto3" json:"seconds,omitempty"`
	// Non-negative fractions of a second at nanosecond resolution
	Nanos                int32    `protobuf:"varint,2,opt,name=nanos,proto3" json:"nanos,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Timestamp) Reset()         { *m = Timestamp{} }
func (m *Timestamp) String() string { return proto.CompactTextString(m) }
func (*Timestamp) ProtoMessage()    {}
func (*Timestamp) Descriptor() ([]byte, []int) {
	return fileDescriptor_4b471a2ab091c539, []int{0}
}

func (m *Timestamp) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Timestamp.Unmarshal(m, b)
}
func (m *Timestamp) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Timestamp.Marshal(b, m, deterministic)
}
func (m *Timestamp) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Timestamp.Merge(m, src)
}
func (m *Timestamp) XXX_Size() int {
	return xxx_messageInfo_Timestamp.Size(m)
}
func (m *Timestamp) XXX_DiscardUnknown() {
	xxx_messageInfo_Timestamp.DiscardUnknown(m)
}

var xxx_messageInfo_Timestamp proto.InternalMessageInfo

func (m *Timestamp) GetSeconds() int64 {
	if m != nil {
		return m.Seconds
	}
	return 0
}

func (m *Timestamp) GetNanos() int32 {
	if m != nil {
		return m.Nanos
	}
	return 0
}

// A TimeRange is two points in time, a start and an end, which is independent
// of any timezone or calendar
type TimeRange struct {
	// the start time as a Timestamp
	StartTime *Timestamp `protobuf:"bytes,1,opt,name=start_time,json=startTime,proto3" json:"start_time,omitempty"`
	// The end time as a Timestamp
	EndTime              *Timestamp `protobuf:"bytes,2,opt,name=end_time,json=endTime,proto3" json:"end_time,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *TimeRange) Reset()         { *m = TimeRange{} }
func (m *TimeRange) String() string { return proto.CompactTextString(m) }
func (*TimeRange) ProtoMessage()    {}
func (*TimeRange) Descriptor() ([]byte, []int) {
	return fileDescriptor_4b471a2ab091c539, []int{1}
}

func (m *TimeRange) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TimeRange.Unmarshal(m, b)
}
func (m *TimeRange) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TimeRange.Marshal(b, m, deterministic)
}
func (m *TimeRange) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TimeRange.Merge(m, src)
}
func (m *TimeRange) XXX_Size() int {
	return xxx_messageInfo_TimeRange.Size(m)
}
func (m *TimeRange) XXX_DiscardUnknown() {
	xxx_messageInfo_TimeRange.DiscardUnknown(m)
}

var xxx_messageInfo_TimeRange proto.InternalMessageInfo

func (m *TimeRange) GetStartTime() *Timestamp {
	if m != nil {
		return m.StartTime
	}
	return nil
}

func (m *TimeRange) GetEndTime() *Timestamp {
	if m != nil {
		return m.EndTime
	}
	return nil
}

// An Index is a specific instance of a window
type Index struct {
	// The index string itself
	Index string `protobuf:"bytes,1,opt,name=index,proto3" json:"index,omitempty"`
	// The derived timerange of the index string
	Timerange            *TimeRange `protobuf:"bytes,2,opt,name=timerange,proto3" json:"timerange,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *Index) Reset()         { *m = Index{} }
func (m *Index) String() string { return proto.CompactTextString(m) }
func (*Index) ProtoMessage()    {}
func (*Index) Descriptor() ([]byte, []int) {
	return fileDescriptor_4b471a2ab091c539, []int{2}
}

func (m *Index) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Index.Unmarshal(m, b)
}
func (m *Index) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Index.Marshal(b, m, deterministic)
}
func (m *Index) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Index.Merge(m, src)
}
func (m *Index) XXX_Size() int {
	return xxx_messageInfo_Index.Size(m)
}
func (m *Index) XXX_DiscardUnknown() {
	xxx_messageInfo_Index.DiscardUnknown(m)
}

var xxx_messageInfo_Index proto.InternalMessageInfo

func (m *Index) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *Index) GetTimerange() *TimeRange {
	if m != nil {
		return m.Timerange
	}
	return nil
}

// A duration measured in nanoseconds (max length is a few hundred years)
type Duration struct {
	// Nanoseconds duration
	Duration             int64    `protobuf:"varint,1,opt,name=duration,proto3" json:"duration,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Duration) Reset()         { *m = Duration{} }
func (m *Duration) String() string { return proto.CompactTextString(m) }
func (*Duration) ProtoMessage()    {}
func (*Duration) Descriptor() ([]byte, []int) {
	return fileDescriptor_4b471a2ab091c539, []int{3}
}

func (m *Duration) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Duration.Unmarshal(m, b)
}
func (m *Duration) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Duration.Marshal(b, m, deterministic)
}
func (m *Duration) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Duration.Merge(m, src)
}
func (m *Duration) XXX_Size() int {
	return xxx_messageInfo_Duration.Size(m)
}
func (m *Duration) XXX_DiscardUnknown() {
	xxx_messageInfo_Duration.DiscardUnknown(m)
}

var xxx_messageInfo_Duration proto.InternalMessageInfo

func (m *Duration) GetDuration() int64 {
	if m != nil {
		return m.Duration
	}
	return 0
}

// A Period is a repeating time which is typically use to either define the repeating nature of a
// Window or to describe periodic boundaries for fill or align operations when cleaning data in a
// TimeSeries.
type Period struct {
	// To frequency of the Period i.e. the nanosecond length of the period
	Frequency *Duration `protobuf:"bytes,1,opt,name=frequency,proto3" json:"frequency,omitempty"`
	// The alignment or phase of the Period is determined by how many nanoseconds
	// it is offset from the UNIX Epoch Jan 1 1970 00:00 UTC
	Offset               int64    `protobuf:"varint,2,opt,name=offset,proto3" json:"offset,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Period) Reset()         { *m = Period{} }
func (m *Period) String() string { return proto.CompactTextString(m) }
func (*Period) ProtoMessage()    {}
func (*Period) Descriptor() ([]byte, []int) {
	return fileDescriptor_4b471a2ab091c539, []int{4}
}

func (m *Period) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Period.Unmarshal(m, b)
}
func (m *Period) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Period.Marshal(b, m, deterministic)
}
func (m *Period) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Period.Merge(m, src)
}
func (m *Period) XXX_Size() int {
	return xxx_messageInfo_Period.Size(m)
}
func (m *Period) XXX_DiscardUnknown() {
	xxx_messageInfo_Period.DiscardUnknown(m)
}

var xxx_messageInfo_Period proto.InternalMessageInfo

func (m *Period) GetFrequency() *Duration {
	if m != nil {
		return m.Frequency
	}
	return nil
}

func (m *Period) GetOffset() int64 {
	if m != nil {
		return m.Offset
	}
	return 0
}

type TypedKey struct {
	// Types that are valid to be assigned to Key:
	//	*TypedKey_TimestampKey
	//	*TypedKey_TimerangeKey
	//	*TypedKey_IndexKey
	Key                  isTypedKey_Key `protobuf_oneof:"key"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *TypedKey) Reset()         { *m = TypedKey{} }
func (m *TypedKey) String() string { return proto.CompactTextString(m) }
func (*TypedKey) ProtoMessage()    {}
func (*TypedKey) Descriptor() ([]byte, []int) {
	return fileDescriptor_4b471a2ab091c539, []int{5}
}

func (m *TypedKey) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TypedKey.Unmarshal(m, b)
}
func (m *TypedKey) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TypedKey.Marshal(b, m, deterministic)
}
func (m *TypedKey) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TypedKey.Merge(m, src)
}
func (m *TypedKey) XXX_Size() int {
	return xxx_messageInfo_TypedKey.Size(m)
}
func (m *TypedKey) XXX_DiscardUnknown() {
	xxx_messageInfo_TypedKey.DiscardUnknown(m)
}

var xxx_messageInfo_TypedKey proto.InternalMessageInfo

type isTypedKey_Key interface {
	isTypedKey_Key()
}

type TypedKey_TimestampKey struct {
	TimestampKey *Timestamp `protobuf:"bytes,1,opt,name=timestamp_key,json=timestampKey,proto3,oneof"`
}

type TypedKey_TimerangeKey struct {
	TimerangeKey *TimeRange `protobuf:"bytes,2,opt,name=timerange_key,json=timerangeKey,proto3,oneof"`
}

type TypedKey_IndexKey struct {
	IndexKey *Index `protobuf:"bytes,3,opt,name=index_key,json=indexKey,proto3,oneof"`
}

func (*TypedKey_TimestampKey) isTypedKey_Key() {}

func (*TypedKey_TimerangeKey) isTypedKey_Key() {}

func (*TypedKey_IndexKey) isTypedKey_Key() {}

func (m *TypedKey) GetKey() isTypedKey_Key {
	if m != nil {
		return m.Key
	}
	return nil
}

func (m *TypedKey) GetTimestampKey() *Timestamp {
	if x, ok := m.GetKey().(*TypedKey_TimestampKey); ok {
		return x.TimestampKey
	}
	return nil
}

func (m *TypedKey) GetTimerangeKey() *TimeRange {
	if x, ok := m.GetKey().(*TypedKey_TimerangeKey); ok {
		return x.TimerangeKey
	}
	return nil
}

func (m *TypedKey) GetIndexKey() *Index {
	if x, ok := m.GetKey().(*TypedKey_IndexKey); ok {
		return x.IndexKey
	}
	return nil
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*TypedKey) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*TypedKey_TimestampKey)(nil),
		(*TypedKey_TimerangeKey)(nil),
		(*TypedKey_IndexKey)(nil),
	}
}

// A single strongly-typed value.
type TypedValue struct {
	// The typed value field.
	//
	// Types that are valid to be assigned to Value:
	//	*TypedValue_BoolValue
	//	*TypedValue_Int64Value
	//	*TypedValue_DoubleValue
	//	*TypedValue_StringValue
	Value                isTypedValue_Value `protobuf_oneof:"value"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *TypedValue) Reset()         { *m = TypedValue{} }
func (m *TypedValue) String() string { return proto.CompactTextString(m) }
func (*TypedValue) ProtoMessage()    {}
func (*TypedValue) Descriptor() ([]byte, []int) {
	return fileDescriptor_4b471a2ab091c539, []int{6}
}

func (m *TypedValue) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TypedValue.Unmarshal(m, b)
}
func (m *TypedValue) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TypedValue.Marshal(b, m, deterministic)
}
func (m *TypedValue) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TypedValue.Merge(m, src)
}
func (m *TypedValue) XXX_Size() int {
	return xxx_messageInfo_TypedValue.Size(m)
}
func (m *TypedValue) XXX_DiscardUnknown() {
	xxx_messageInfo_TypedValue.DiscardUnknown(m)
}

var xxx_messageInfo_TypedValue proto.InternalMessageInfo

type isTypedValue_Value interface {
	isTypedValue_Value()
}

type TypedValue_BoolValue struct {
	BoolValue bool `protobuf:"varint,1,opt,name=bool_value,json=boolValue,proto3,oneof"`
}

type TypedValue_Int64Value struct {
	Int64Value int64 `protobuf:"varint,2,opt,name=int64_value,json=int64Value,proto3,oneof"`
}

type TypedValue_DoubleValue struct {
	DoubleValue float64 `protobuf:"fixed64,3,opt,name=double_value,json=doubleValue,proto3,oneof"`
}

type TypedValue_StringValue struct {
	StringValue string `protobuf:"bytes,4,opt,name=string_value,json=stringValue,proto3,oneof"`
}

func (*TypedValue_BoolValue) isTypedValue_Value() {}

func (*TypedValue_Int64Value) isTypedValue_Value() {}

func (*TypedValue_DoubleValue) isTypedValue_Value() {}

func (*TypedValue_StringValue) isTypedValue_Value() {}

func (m *TypedValue) GetValue() isTypedValue_Value {
	if m != nil {
		return m.Value
	}
	return nil
}

func (m *TypedValue) GetBoolValue() bool {
	if x, ok := m.GetValue().(*TypedValue_BoolValue); ok {
		return x.BoolValue
	}
	return false
}

func (m *TypedValue) GetInt64Value() int64 {
	if x, ok := m.GetValue().(*TypedValue_Int64Value); ok {
		return x.Int64Value
	}
	return 0
}

func (m *TypedValue) GetDoubleValue() float64 {
	if x, ok := m.GetValue().(*TypedValue_DoubleValue); ok {
		return x.DoubleValue
	}
	return 0
}

func (m *TypedValue) GetStringValue() string {
	if x, ok := m.GetValue().(*TypedValue_StringValue); ok {
		return x.StringValue
	}
	return ""
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*TypedValue) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*TypedValue_BoolValue)(nil),
		(*TypedValue_Int64Value)(nil),
		(*TypedValue_DoubleValue)(nil),
		(*TypedValue_StringValue)(nil),
	}
}

type LabelPair struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Value                string   `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *LabelPair) Reset()         { *m = LabelPair{} }
func (m *LabelPair) String() string { return proto.CompactTextString(m) }
func (*LabelPair) ProtoMessage()    {}
func (*LabelPair) Descriptor() ([]byte, []int) {
	return fileDescriptor_4b471a2ab091c539, []int{7}
}

func (m *LabelPair) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LabelPair.Unmarshal(m, b)
}
func (m *LabelPair) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LabelPair.Marshal(b, m, deterministic)
}
func (m *LabelPair) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LabelPair.Merge(m, src)
}
func (m *LabelPair) XXX_Size() int {
	return xxx_messageInfo_LabelPair.Size(m)
}
func (m *LabelPair) XXX_DiscardUnknown() {
	xxx_messageInfo_LabelPair.DiscardUnknown(m)
}

var xxx_messageInfo_LabelPair proto.InternalMessageInfo

func (m *LabelPair) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *LabelPair) GetValue() string {
	if m != nil {
		return m.Value
	}
	return ""
}

//
// A single Event. The Event contains the time of the event and the value
// at that time. Each event also has a metric name and a set of key/values
// called labels.
//
// The time of the Event may either be a single point in time, expressed
// as a Timestamp, or a range of time expressed either as a TimeRange or
// an Index.
//
// The value of the Event is expressed a set of fields, value pairs
// e.g. 2018-12-31 -> "in"=23, "out"=5, ...
type Event struct {
	// The metric name
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The time or timerange of the key, expressed as a timestamp timerange or Index.
	Key *TypedKey `protobuf:"bytes,2,opt,name=key,proto3" json:"key,omitempty"`
	// The Event value, which can be one of bool, int64, double or string
	Value *TypedValue `protobuf:"bytes,3,opt,name=value,proto3" json:"value,omitempty"`
	// Labels are used to annotate different characteristics of the metric
	Labels               []*LabelPair `protobuf:"bytes,4,rep,name=labels,proto3" json:"labels,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *Event) Reset()         { *m = Event{} }
func (m *Event) String() string { return proto.CompactTextString(m) }
func (*Event) ProtoMessage()    {}
func (*Event) Descriptor() ([]byte, []int) {
	return fileDescriptor_4b471a2ab091c539, []int{8}
}

func (m *Event) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Event.Unmarshal(m, b)
}
func (m *Event) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Event.Marshal(b, m, deterministic)
}
func (m *Event) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Event.Merge(m, src)
}
func (m *Event) XXX_Size() int {
	return xxx_messageInfo_Event.Size(m)
}
func (m *Event) XXX_DiscardUnknown() {
	xxx_messageInfo_Event.DiscardUnknown(m)
}

var xxx_messageInfo_Event proto.InternalMessageInfo

func (m *Event) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Event) GetKey() *TypedKey {
	if m != nil {
		return m.Key
	}
	return nil
}

func (m *Event) GetValue() *TypedValue {
	if m != nil {
		return m.Value
	}
	return nil
}

func (m *Event) GetLabels() []*LabelPair {
	if m != nil {
		return m.Labels
	}
	return nil
}

//
// Describes a list of Events. There is no meta data associated with the
// Collection and no expectation of the order of the Events. In Pond
// a TimeSeries contains a Collection, which holds most of the functionality
// assoicated with Event manipulation.
type Collection struct {
	// A list of Events that make up the Collection
	Events               []*Event `protobuf:"bytes,2,rep,name=events,proto3" json:"events,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Collection) Reset()         { *m = Collection{} }
func (m *Collection) String() string { return proto.CompactTextString(m) }
func (*Collection) ProtoMessage()    {}
func (*Collection) Descriptor() ([]byte, []int) {
	return fileDescriptor_4b471a2ab091c539, []int{9}
}

func (m *Collection) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Collection.Unmarshal(m, b)
}
func (m *Collection) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Collection.Marshal(b, m, deterministic)
}
func (m *Collection) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Collection.Merge(m, src)
}
func (m *Collection) XXX_Size() int {
	return xxx_messageInfo_Collection.Size(m)
}
func (m *Collection) XXX_DiscardUnknown() {
	xxx_messageInfo_Collection.DiscardUnknown(m)
}

var xxx_messageInfo_Collection proto.InternalMessageInfo

func (m *Collection) GetEvents() []*Event {
	if m != nil {
		return m.Events
	}
	return nil
}

//
// A single timestamped Point, part of a TimeSeries, containing a list of
// values associated with a single Key.
// For example: "in" and "out" traffic [in, out] at the given timestamp.
type Point struct {
	// The time or timerange of the key, expressed as a timestamp,
	// timerange or Index.
	Key *TypedKey `protobuf:"bytes,1,opt,name=key,proto3" json:"key,omitempty"`
	// Point values
	Values               []*TypedValue `protobuf:"bytes,2,rep,name=values,proto3" json:"values,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *Point) Reset()         { *m = Point{} }
func (m *Point) String() string { return proto.CompactTextString(m) }
func (*Point) ProtoMessage()    {}
func (*Point) Descriptor() ([]byte, []int) {
	return fileDescriptor_4b471a2ab091c539, []int{10}
}

func (m *Point) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Point.Unmarshal(m, b)
}
func (m *Point) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Point.Marshal(b, m, deterministic)
}
func (m *Point) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Point.Merge(m, src)
}
func (m *Point) XXX_Size() int {
	return xxx_messageInfo_Point.Size(m)
}
func (m *Point) XXX_DiscardUnknown() {
	xxx_messageInfo_Point.DiscardUnknown(m)
}

var xxx_messageInfo_Point proto.InternalMessageInfo

func (m *Point) GetKey() *TypedKey {
	if m != nil {
		return m.Key
	}
	return nil
}

func (m *Point) GetValues() []*TypedValue {
	if m != nil {
		return m.Values
	}
	return nil
}

//
// A TimeSeries, containing the a name and a list
// of points. Each point is an `Event` and contains a timestamp and
// a list of assocated values at that time. For example to represent
// interface traffic those values would be inbound and outbound network
// traffic. This is roughly equivalent to a Pond `TimeSeries`, but some
// transformation needs to occur.
type TimeSeries struct {
	// A set of key/value pairs defining meta data about this timeseries
	// e.g. name="traffic", utc="true". Both the label and the value are
	// strings
	Labels []*LabelPair `protobuf:"bytes,1,rep,name=labels,proto3" json:"labels,omitempty"`
	// Columns of data in the TimeSeries
	Columns []string `protobuf:"bytes,2,rep,name=columns,proto3" json:"columns,omitempty"`
	// A list of `Event` points that make up the TimeSeries. Each
	// point contains a timestamp and list of values. Each value
	// corresponds to a column described in the `columns` field.
	Points               []*Point `protobuf:"bytes,3,rep,name=points,proto3" json:"points,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TimeSeries) Reset()         { *m = TimeSeries{} }
func (m *TimeSeries) String() string { return proto.CompactTextString(m) }
func (*TimeSeries) ProtoMessage()    {}
func (*TimeSeries) Descriptor() ([]byte, []int) {
	return fileDescriptor_4b471a2ab091c539, []int{11}
}

func (m *TimeSeries) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TimeSeries.Unmarshal(m, b)
}
func (m *TimeSeries) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TimeSeries.Marshal(b, m, deterministic)
}
func (m *TimeSeries) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TimeSeries.Merge(m, src)
}
func (m *TimeSeries) XXX_Size() int {
	return xxx_messageInfo_TimeSeries.Size(m)
}
func (m *TimeSeries) XXX_DiscardUnknown() {
	xxx_messageInfo_TimeSeries.DiscardUnknown(m)
}

var xxx_messageInfo_TimeSeries proto.InternalMessageInfo

func (m *TimeSeries) GetLabels() []*LabelPair {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *TimeSeries) GetColumns() []string {
	if m != nil {
		return m.Columns
	}
	return nil
}

func (m *TimeSeries) GetPoints() []*Point {
	if m != nil {
		return m.Points
	}
	return nil
}

func init() {
	proto.RegisterType((*Timestamp)(nil), "pond.Timestamp")
	proto.RegisterType((*TimeRange)(nil), "pond.TimeRange")
	proto.RegisterType((*Index)(nil), "pond.Index")
	proto.RegisterType((*Duration)(nil), "pond.Duration")
	proto.RegisterType((*Period)(nil), "pond.Period")
	proto.RegisterType((*TypedKey)(nil), "pond.TypedKey")
	proto.RegisterType((*TypedValue)(nil), "pond.TypedValue")
	proto.RegisterType((*LabelPair)(nil), "pond.LabelPair")
	proto.RegisterType((*Event)(nil), "pond.Event")
	proto.RegisterType((*Collection)(nil), "pond.Collection")
	proto.RegisterType((*Point)(nil), "pond.Point")
	proto.RegisterType((*TimeSeries)(nil), "pond.TimeSeries")
}

func init() { proto.RegisterFile("pond.proto", fileDescriptor_4b471a2ab091c539) }

var fileDescriptor_4b471a2ab091c539 = []byte{
	// 593 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x94, 0xcd, 0x6e, 0xd3, 0x40,
	0x10, 0xc7, 0xe3, 0x3a, 0x76, 0xed, 0x49, 0xf9, 0xd0, 0x0a, 0xa1, 0x88, 0x03, 0x04, 0x57, 0x2a,
	0x55, 0x05, 0x89, 0xf8, 0xea, 0x85, 0x5b, 0x01, 0x29, 0xa8, 0x15, 0xaa, 0xb6, 0x15, 0x07, 0x2e,
	0x95, 0x13, 0x4f, 0x82, 0x55, 0x67, 0x37, 0xd8, 0xeb, 0x0a, 0xbf, 0x04, 0x2f, 0xc1, 0x99, 0x77,
	0x44, 0x33, 0xbb, 0x4e, 0x22, 0x35, 0xe5, 0xb6, 0xb3, 0xf3, 0xff, 0xcf, 0xfe, 0x66, 0x76, 0x6d,
	0x80, 0xa5, 0x56, 0xd9, 0x70, 0x59, 0x6a, 0xa3, 0x45, 0x97, 0xd6, 0xc9, 0x07, 0x88, 0x2f, 0xf3,
	0x05, 0x56, 0x26, 0x5d, 0x2c, 0x45, 0x1f, 0x76, 0x2b, 0x9c, 0x6a, 0x95, 0x55, 0x7d, 0x6f, 0xe0,
	0x1d, 0xfa, 0xb2, 0x0d, 0xc5, 0x23, 0x08, 0x54, 0xaa, 0x74, 0xd5, 0xdf, 0x19, 0x78, 0x87, 0x81,
	0xb4, 0x41, 0x32, 0xb7, 0x66, 0x99, 0xaa, 0x39, 0x8a, 0x21, 0x40, 0x65, 0xd2, 0xd2, 0x5c, 0x99,
	0x7c, 0x81, 0xec, 0xef, 0xbd, 0x79, 0x30, 0xe4, 0x03, 0x57, 0x27, 0xc8, 0x98, 0x25, 0x14, 0x8b,
	0x23, 0x88, 0x50, 0x65, 0x56, 0xbd, 0xb3, 0x5d, 0xbd, 0x8b, 0x2a, 0xa3, 0x28, 0x39, 0x83, 0xe0,
	0x8b, 0xca, 0xf0, 0x17, 0x71, 0xe4, 0xb4, 0xe0, 0xfa, 0xb1, 0xb4, 0x81, 0x78, 0x05, 0x31, 0x95,
	0x29, 0x89, 0xe3, 0x76, 0x2d, 0xc6, 0x93, 0x6b, 0x45, 0x72, 0x00, 0xd1, 0xa7, 0xba, 0x4c, 0x4d,
	0xae, 0x95, 0x78, 0x02, 0x51, 0xe6, 0xd6, 0xae, 0xe7, 0x55, 0x9c, 0x7c, 0x85, 0xf0, 0x1c, 0xcb,
	0x5c, 0x67, 0xe2, 0x25, 0xc4, 0xb3, 0x12, 0x7f, 0xd6, 0xa8, 0xa6, 0x8d, 0x6b, 0xed, 0xbe, 0x3d,
	0xa0, 0x2d, 0x24, 0xd7, 0x02, 0xf1, 0x18, 0x42, 0x3d, 0x9b, 0x55, 0x68, 0x98, 0xc5, 0x97, 0x2e,
	0x4a, 0xfe, 0x7a, 0x10, 0x5d, 0x36, 0x4b, 0xcc, 0x4e, 0xb1, 0x11, 0xc7, 0x70, 0xcf, 0xb4, 0x8d,
	0x5e, 0x5d, 0x63, 0x73, 0xc7, 0xc4, 0xc6, 0x1d, 0xb9, 0xb7, 0xd2, 0x6d, 0xf8, 0xb8, 0x13, 0xf6,
	0x6d, 0xef, 0xb7, 0xf5, 0xb1, 0x8e, 0x7c, 0x47, 0x10, 0xf3, 0xb0, 0xd8, 0xe3, 0xb3, 0xa7, 0x67,
	0x3d, 0x3c, 0xd9, 0x71, 0x47, 0x46, 0x9c, 0x3f, 0xc5, 0xe6, 0x24, 0x00, 0xff, 0x1a, 0x9b, 0xe4,
	0x8f, 0x07, 0xc0, 0xbc, 0xdf, 0xd2, 0xa2, 0x46, 0xf1, 0x0c, 0x60, 0xa2, 0x75, 0x71, 0x75, 0x43,
	0x11, 0xe3, 0x46, 0xe3, 0x8e, 0x8c, 0x69, 0xcf, 0x0a, 0x9e, 0x43, 0x2f, 0x57, 0xe6, 0xf8, 0x9d,
	0x53, 0x70, 0xf3, 0xe3, 0x8e, 0x04, 0xde, 0xb4, 0x92, 0x7d, 0xd8, 0xcb, 0x74, 0x3d, 0x29, 0xd0,
	0x69, 0x08, 0xc4, 0x1b, 0x77, 0x64, 0xcf, 0xee, 0xae, 0x44, 0x95, 0x29, 0x73, 0x35, 0x77, 0xa2,
	0x2e, 0xdd, 0x35, 0x89, 0xec, 0x2e, 0x8b, 0x4e, 0x76, 0x21, 0xe0, 0x6c, 0xf2, 0x1e, 0xe2, 0xb3,
	0x74, 0x82, 0xc5, 0x79, 0x9a, 0x97, 0x42, 0x40, 0x57, 0xa5, 0xee, 0xf9, 0xc5, 0x92, 0xd7, 0xf4,
	0x66, 0xd6, 0x40, 0xb1, 0x74, 0xb6, 0xdf, 0x1e, 0x04, 0x9f, 0x6f, 0x50, 0x99, 0xad, 0x9e, 0x01,
	0x4f, 0xc0, 0xcd, 0xd6, 0x5d, 0x75, 0x7b, 0x75, 0x92, 0x52, 0xe2, 0xa0, 0xad, 0x6a, 0x67, 0xf9,
	0x70, 0x43, 0xc3, 0x80, 0xee, 0x1c, 0xf1, 0x02, 0xc2, 0x82, 0xf0, 0xaa, 0x7e, 0x77, 0xe0, 0xaf,
	0x2f, 0x6a, 0x85, 0x2c, 0x5d, 0x3a, 0x79, 0x0d, 0xf0, 0x51, 0x17, 0x05, 0x4e, 0xf9, 0x5d, 0xee,
	0x43, 0x88, 0x44, 0x47, 0x5f, 0x9c, 0xbf, 0xbe, 0x2b, 0x26, 0x96, 0x2e, 0x95, 0x5c, 0x40, 0x70,
	0xae, 0x73, 0x65, 0x5a, 0x5c, 0xef, 0x6e, 0xdc, 0x43, 0x08, 0x99, 0xa7, 0xad, 0x77, 0x9b, 0xd7,
	0xe5, 0x13, 0x03, 0x40, 0xaf, 0xe8, 0x02, 0xcb, 0x1c, 0xab, 0x0d, 0x7c, 0xef, 0xbf, 0xf8, 0xf4,
	0xef, 0x98, 0xea, 0xa2, 0x5e, 0x28, 0x7b, 0x42, 0x2c, 0xdb, 0x90, 0x5a, 0x59, 0x12, 0x65, 0xd5,
	0xf7, 0x37, 0x5b, 0x61, 0x72, 0xe9, 0x52, 0x27, 0x83, 0xef, 0x4f, 0xe7, 0xb9, 0xf9, 0x51, 0x4f,
	0x86, 0x53, 0xbd, 0x18, 0x61, 0xa5, 0xd0, 0x8c, 0xf8, 0x3f, 0x35, 0x9a, 0xeb, 0x11, 0xe9, 0x27,
	0x21, 0x87, 0x6f, 0xff, 0x05, 0x00, 0x00, 0xff, 0xff, 0xc7, 0xc1, 0xf9, 0xc0, 0xc4, 0x04, 0x00,
	0x00,
}
